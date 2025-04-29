# Organ Matching Dataset

This dataset contains synthetic data for organ donation matching, based on real-world medical criteria. The data includes:

## Columns

1. `donor_id`: Unique identifier for donors
2. `donor_age`: Age of the donor (years)
3. `donor_blood_type`: Blood type of donor (A+, A-, B+, B-, AB+, AB-, O+, O-)
4. `donor_height`: Height in centimeters
5. `donor_weight`: Weight in kilograms
6. `donor_organ_type`: Type of organ donated
7. `donor_medical_history`: Medical history status
8. `recipient_id`: Unique identifier for recipients
9. `recipient_age`: Age of the recipient (years)
10. `recipient_blood_type`: Blood type of recipient
11. `recipient_height`: Height in centimeters
12. `recipient_weight`: Weight in kilograms
13. `recipient_urgency_level`: Urgency level (1-5, where 5 is most urgent)
14. `recipient_waiting_time_days`: Days on waiting list
15. `match_score`: Calculated compatibility score (0-100)
16. `match_success`: Whether the match was successful (1) or not (0)

## Matching Criteria

The match score is calculated based on:

1. Blood type compatibility (40%)
2. Age difference (15%)
3. Size compatibility (15%)
4. Medical urgency (20%)
5. Waiting time (10%)

## Data Sources

This dataset is synthesized based on medical guidelines from:

1. United Network for Organ Sharing (UNOS)
2. World Health Organization (WHO) guidelines
3. Scientific literature on organ donation matching criteria