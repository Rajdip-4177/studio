export interface TeamStats {
  id: string;
  name: string;
  logoUrl: string;
  city: string;
  state: string;
  lifeExpectancy: number;
  infantMortalityRate: number;
  literacyRate: number;
  attendanceRatio: number;
  perCapitaIncome: number;
}

const parseIncome = (incomeStr: string): number => {
  return Number(incomeStr.replace(/,/g, ''));
};

export const teamsData: TeamStats[] = [
  { id: "CSK", name: "Chennai Super Kings", logoUrl: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png", city: "Chennai", state: "Tamil Nadu", lifeExpectancy: 71.0, infantMortalityRate: 15, literacyRate: 80.1, attendanceRatio: 89.5, perCapitaIncome: parseIncome("193,964") },
  { id: "DC", name: "Delhi Capitals", logoUrl: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png", city: "New Delhi", state: "Delhi", lifeExpectancy: 73.8, infantMortalityRate: 13, literacyRate: 86.2, attendanceRatio: 89.8, perCapitaIncome: parseIncome("358,430") },
  { id: "GT", name: "Gujarat Titans", logoUrl: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png", city: "Ahmedabad", state: "Gujarat", lifeExpectancy: 69.1, infantMortalityRate: 28, literacyRate: 78.0, attendanceRatio: 93.7, perCapitaIncome: parseIncome("195,845") },
  { id: "KKR", name: "Kolkata Knight Riders", logoUrl: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png", city: "Kolkata", state: "West Bengal", lifeExpectancy: 70.5, infantMortalityRate: 22, literacyRate: 76.3, attendanceRatio: 88.4, perCapitaIncome: parseIncome("101,138") },
  { id: "LSG", name: "Lucknow Super Giants", logoUrl: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png", city: "Lucknow", state: "Uttar Pradesh", lifeExpectancy: 64.5, infantMortalityRate: 43, literacyRate: 67.7, attendanceRatio: 79.2, perCapitaIncome: parseIncome("66,512") },
  { id: "MI", name: "Mumbai Indians", logoUrl: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png", city: "Mumbai", state: "Maharashtra", lifeExpectancy: 72.0, infantMortalityRate: 19, literacyRate: 82.3, attendanceRatio: 90.8, perCapitaIncome: parseIncome("191,736") },
  { id: "PBKS", name: "Punjab Kings", logoUrl: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png", city: "Mullanpur", state: "Punjab", lifeExpectancy: 72.1, infantMortalityRate: 20, literacyRate: 75.8, attendanceRatio: 88.8, perCapitaIncome: parseIncome("154,313") },
  { id: "RR", name: "Rajasthan Royals", logoUrl: "https://placehold.co/64x64.png", city: "Jaipur", state: "Rajasthan", lifeExpectancy: 67.9, infantMortalityRate: 37, literacyRate: 66.1, attendanceRatio: 89.5, perCapitaIncome: parseIncome("110,606") },
  { id: "RCB", name: "Royal Challengers Bengaluru", logoUrl: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png", city: "Bengaluru", state: "Karnataka", lifeExpectancy: 69.0, infantMortalityRate: 23, literacyRate: 75.4, attendanceRatio: 95.3, perCapitaIncome: parseIncome("212,477") },
  { id: "SRH", name: "Sunrisers Hyderabad", logoUrl: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png", city: "Hyderabad", state: "Telangana", lifeExpectancy: 69.0, infantMortalityRate: 29, literacyRate: 67.0, attendanceRatio: 86.5, perCapitaIncome: parseIncome("151,173") }, // Updated state for Hyderabad to Telangana
];
