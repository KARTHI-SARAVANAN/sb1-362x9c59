import { Donor, Recipient, OrganMatch, OrganType, BloodType } from '../types';

// Blood type compatibility matrix
const bloodCompatibilityMatrix: Record<BloodType, BloodType[]> = {
  'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
  'O+': ['O+', 'A+', 'B+', 'AB+'],
  'A-': ['A-', 'A+', 'AB-', 'AB+'],
  'A+': ['A+', 'AB+'],
  'B-': ['B-', 'B+', 'AB-', 'AB+'],
  'B+': ['B+', 'AB+'],
  'AB-': ['AB-', 'AB+'],
  'AB+': ['AB+']
};

// Calculate age compatibility score
const calculateAgeCompatibilityScore = (donorAge: number, recipientAge: number): number => {
  const ageDifference = Math.abs(donorAge - recipientAge);
  if (ageDifference <= 5) return 1.0;
  if (ageDifference <= 10) return 0.9;
  if (ageDifference <= 15) return 0.8;
  if (ageDifference <= 20) return 0.7;
  return 0.6;
};

// Calculate body size compatibility
const calculateSizeCompatibilityScore = (
  donorHeight: number, 
  donorWeight: number, 
  recipientHeight: number, 
  recipientWeight: number
): number => {
  const donorBMI = donorWeight / ((donorHeight / 100) ** 2);
  const recipientBMI = recipientWeight / ((recipientHeight / 100) ** 2);
  
  const bmiDifference = Math.abs(donorBMI - recipientBMI);
  if (bmiDifference <= 2) return 1.0;
  if (bmiDifference <= 4) return 0.9;
  if (bmiDifference <= 6) return 0.8;
  if (bmiDifference <= 8) return 0.7;
  return 0.6;
};

// Calculate blood type compatibility score
const calculateBloodCompatibilityScore = (donorBloodType: BloodType, recipientBloodType: BloodType): number => {
  return bloodCompatibilityMatrix[donorBloodType].includes(recipientBloodType) ? 1.0 : 0.0;
};

// Main matching algorithm
export const findOrganMatches = (
  donors: Donor[], 
  recipients: Recipient[], 
  organType: OrganType
): OrganMatch[] => {
  const matches: OrganMatch[] = [];
  
  // Filter donors and recipients by organ type
  const compatibleDonors = donors.filter(donor => 
    donor.organType.includes(organType) && donor.isActive
  );
  
  const needingRecipients = recipients.filter(recipient => 
    recipient.neededOrgan === organType
  );
  
  // Calculate match scores for all potential matches
  for (const donor of compatibleDonors) {
    for (const recipient of needingRecipients) {
      // First check blood compatibility - if incompatible, skip this match
      const bloodCompatibility = calculateBloodCompatibilityScore(donor.bloodType, recipient.bloodType);
      if (bloodCompatibility === 0) continue;
      
      // Calculate other compatibility factors
      const ageCompatibility = calculateAgeCompatibilityScore(donor.age, recipient.age);
      const sizeCompatibility = calculateSizeCompatibilityScore(
        donor.height, donor.weight, recipient.height, recipient.weight
      );
      
      // Calculate urgency factor (1-5 scale, normalized to 0-1)
      const urgencyFactor = recipient.urgencyLevel / 5;
      
      // Calculate waiting time factor (normalize to 0-1 with max of 5 years)
      const waitingTimeInDays = (Date.now() - recipient.waitingSince.getTime()) / (1000 * 60 * 60 * 24);
      const waitingTimeFactor = Math.min(waitingTimeInDays / (365 * 5), 1); // Cap at 5 years
      
      // Calculate final match score (weighted average)
      const matchScore = (
        bloodCompatibility * 0.4 + // Blood type compatibility is most important
        ageCompatibility * 0.15 +
        sizeCompatibility * 0.15 +
        urgencyFactor * 0.2 +
        waitingTimeFactor * 0.1
      ) * 100; // Convert to percentage
      
      // Add to matches if score is above threshold
      if (matchScore > 60) {
        matches.push({
          id: `match-${donor.id}-${recipient.id}`,
          donationId: `donation-${donor.id}-${organType}`,
          recipientId: recipient.id,
          matchScore,
          status: 'pending',
          createdAt: new Date()
        });
      }
    }
  }
  
  // Sort matches by score (highest first)
  return matches.sort((a, b) => b.matchScore - a.matchScore);
};