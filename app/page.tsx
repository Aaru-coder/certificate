import Certificate from '@/components/Certificate';

export default function Page() {
  const studentData = {
    serialNo: "20201",
    enrollNo: "HP027H00019018",
    rollNo: "HP02719018",
    studentName: "Miss Dishika Trivedi",
    collegeName: "S.K.R.P. GUJARATI HOMOEOPATHIC MEDICAL COLLEGE, INDORE",
    degreeName: "Bachelors of Homoeopathic Medicine & Surgery",
    examDate: "APRIL-2025",
    issueDate: "06/04/2026",
    signer: "ASHOK KHANDELWAL",
    signDate: "2026.04.06 14:12:42 IST",
    imageUrl: "https://res.cloudinary.com/dpjwd6oae/image/upload/v1773659355/certificate_1_uekjwn.jpg" 
  };

  return <Certificate data={studentData} />;
}