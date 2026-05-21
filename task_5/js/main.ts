interface MajorCredits {
  credits: number;
  _brand: "major"
}

interface MinorCredits {
  credits: number;
  _brand: "minor"
}

function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "major" as const };
}

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "minor" as const };
}

const major1: MajorCredits = { credits: 3, _brand: "major" };
const major2: MajorCredits = { credits: 5, _brand: "major" };
console.log(sumMajorCredits(major1, major2)); // { credits: 8, _brand: "major" }

const minor1: MinorCredits = { credits: 2, _brand: "minor" };
const minor2: MinorCredits = { credits: 4, _brand: "minor" };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 6, _brand: "minor" }
