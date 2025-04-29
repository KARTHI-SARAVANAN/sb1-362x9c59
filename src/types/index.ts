export interface User {
  id: string;
  name: string;
  email: string;
  role: 'donor' | 'recipient' | 'medical' | 'admin';
  createdAt: Date;
}

export interface Donor extends User {
  bloodType: BloodType;
  organType: OrganType[];
  medicalHistory: string;
  age: number;
  weight: number;
  height: number;
  isActive: boolean;
}

export interface Recipient extends User {
  bloodType: BloodType;
  neededOrgan: OrganType;
  urgencyLevel: 1 | 2 | 3 | 4 | 5; // 1 being lowest, 5 being highest
  waitingSince: Date;
  medicalHistory: string;
  age: number;
  weight: number;
  height: number;
}

export interface MedicalProfessional extends User {
  licenseNumber: string;
  specialization: string;
  hospital: string;
}

export interface Donation {
  id: string;
  donorId: string;
  organType: OrganType;
  status: 'pending' | 'approved' | 'matched' | 'transplanted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  medicalApproval?: {
    approvedBy: string;
    approvedAt: Date;
    notes: string;
  };
}

export interface OrganMatch {
  id: string;
  donationId: string;
  recipientId: string;
  matchScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: Date;
  approvedBy?: string;
}

export interface Block {
  index: number;
  timestamp: number;
  data: any;
  previousHash: string;
  hash: string;
  nonce: number;
}

export interface Blockchain {
  chain: Block[];
  difficulty: number;
  pendingTransactions: Transaction[];
  miningReward: number;
}

export interface Transaction {
  fromAddress: string | null;
  toAddress: string;
  amount: number;
  timestamp: number;
  data: any;
  signature?: string;
}

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type OrganType = 
  | 'heart' 
  | 'kidney' 
  | 'liver' 
  | 'lung' 
  | 'pancreas' 
  | 'intestine' 
  | 'cornea' 
  | 'bone' 
  | 'skin' 
  | 'tissue';