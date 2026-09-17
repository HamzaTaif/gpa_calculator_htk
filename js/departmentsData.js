/**
 * UET Department & Curriculum Data Matrix
 * Contains exact course names, credit hours, semester structures, and Lab flags for all 16 departments.
 */

const UET_DEPARTMENTS = [
  {
    id: "dept-1",
    name: "Civil Engineering",
    code: "CE",
    icon: "🏗️",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Functional English", credits: 3 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Islamic Studies", credits: 2 },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Professional Ethics", credits: 2 },
          { name: "Engineering Drawing for Civil Engineers", credits: 3, hasLab: true },
          { name: "Applications of ICT", credits: 3, hasLab: true },
          { name: "Electrical Technology", credits: 1 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Expository Writing", credits: 3 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Linear Algebra and Differential Equations", credits: 3 },
          { name: "Calculus and Analytical Geometry", credits: 3 },
          { name: "Mechanical Tech. & Heavy Constr. Machinery", credits: 2 },
          { name: "Computer Aided Drawing for Civil Engineering", credits: 2, hasLab: true },
          { name: "Engineering Mechanics", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Quantitative Reasoning-I", credits: 3 },
          { name: "Building Construction Engineering", credits: 2 },
          { name: "Computer Programming", credits: 2, hasLab: true },
          { name: "Civil Engineering Materials", credits: 3, hasLab: true },
          { name: "Engineering Geology & Seismology", credits: 2 },
          { name: "Surveying - I", credits: 3, hasLab: true },
          { name: "Mechanics of Solids-I", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Quantitative Reasoning - II", credits: 3 },
          { name: "Fluid Mechanics-I", credits: 3, hasLab: true },
          { name: "Intro. to Architecture & Urban Planning", credits: 2 },
          { name: "Mechanics of Solids-II", credits: 3, hasLab: true },
          { name: "Structural Analysis - I", credits: 3 },
          { name: "Surveying - II", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Building Information Modeling (BIM)", credits: 1, hasLab: true },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Environmental Engineering - I", credits: 2, hasLab: true },
          { name: "Fluid Mechanics - II", credits: 4, hasLab: true },
          { name: "Geotechnical Engineering-I", credits: 3, hasLab: true },
          { name: "Transportation Engineering - I", credits: 2 },
          { name: "Structural Analysis - II", credits: 3 },
          { name: "GIS & Remote Sensing Lab", credits: 1, isLabOnly: true }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Environmental Engineering - II", credits: 3, hasLab: true },
          { name: "Geotechnical Engineering-II", credits: 3, hasLab: true },
          { name: "Hydraulics", credits: 2, hasLab: true },
          { name: "Reinforced Concrete Design - I", credits: 4 },
          { name: "Transportation Engineering - II", credits: 4, hasLab: true },
          { name: "Numerical Analysis and Computer Applications", credits: 2, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Foundation Engineering", credits: 2 },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Quantity Surveying & Civil Engg. Practice", credits: 3 },
          { name: "Engineering Hydrology", credits: 2 },
          { name: "Reinforced Concrete Design - II", credits: 4 },
          { name: "Steel Structures", credits: 2 },
          { name: "FYDP Part-I", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Project Management and Engineering Law", credits: 2 },
          { name: "Occupational Health & Safety", credits: 1 },
          { name: "AI for Civil Engineers", credits: 1 },
          { name: "Intro. to Str. Dynamics & Earthquake Engg.", credits: 2 },
          { name: "Human Resource Management", credits: 2 },
          { name: "Hydraulic and Hydrology Lab", credits: 1, isLabOnly: true },
          { name: "Irrigation Engineering", credits: 3 },
          { name: "FYDP Part-II", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-2",
    name: "Agricultural Engineering",
    code: "AGE",
    icon: "🌾",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Islamic Studies", credits: 2 },
          { name: "Fundamentals of Computer & Applications", credits: 3, hasLab: true },
          { name: "Basic Agriculture", credits: 2 },
          { name: "Engineering Mechanics", credits: 4, hasLab: true },
          { name: "Engineering Drawing", credits: 3, hasLab: true },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Workshop Practice", credits: 1, isLabOnly: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Soil Science", credits: 3, hasLab: true },
          { name: "Engineering Materials", credits: 3, hasLab: true },
          { name: "Mechanics of Materials", credits: 3, hasLab: true },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Linear Algebra", credits: 3 },
          { name: "English Composition and Comprehension", credits: 3 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Computer Programming", credits: 2, hasLab: true },
          { name: "Soil and Water Conservation Engineering", credits: 3, hasLab: true },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Occupational Health & Safety", credits: 1 },
          { name: "Calculus", credits: 3 },
          { name: "Surveying-I", credits: 3, hasLab: true },
          { name: "Geotechnical Engineering-I", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Professional Ethics", credits: 2 },
          { name: "Machine Design", credits: 3 },
          { name: "Fluid Mechanics", credits: 4, hasLab: true },
          { name: "Quantity Survey and Cost Estimation", credits: 2 },
          { name: "Computer Aided Design", credits: 1, hasLab: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Surveying-II", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Agricultural Process Engineering", credits: 3, hasLab: true },
          { name: "Engineering Hydrology", credits: 2 },
          { name: "Alternate Energy Resources", credits: 2 },
          { name: "Engg Economics & Project Management", credits: 2 },
          { name: "AI Applications in Agricultural Engineering", credits: 2, hasLab: true },
          { name: "Probability and Statistics", credits: 3 },
          { name: "Environmental Engineering-I", credits: 2, hasLab: true }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Ground Water Hydrology", credits: 4, hasLab: true },
          { name: "Geographic Information System (GIS)", credits: 1, isLabOnly: true },
          { name: "Farm Irrigation Systems", credits: 3, hasLab: true },
          { name: "Farm Machinery & Earth Moving Equipment", credits: 4, hasLab: true },
          { name: "Technical Writing and Presentation Skills", credits: 3 },
          { name: "Environmental Engineering-II", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "IC Engines and Tractors", credits: 4, hasLab: true },
          { name: "Open Channel Hydraulics", credits: 3, hasLab: true },
          { name: "Landscape Engineering", credits: 2 },
          { name: "Drainage Engineering", credits: 4, hasLab: true },
          { name: "Final Year Design Project", credits: 3 },
          { name: "Entrepreneurship", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Design of Agricultural Machinery", credits: 3 },
          { name: "Farm Structures", credits: 2 },
          { name: "On-Farm Water Management", credits: 4, hasLab: true },
          { name: "Environment and Sustainability", credits: 2 },
          { name: "Final Year Design Project", credits: 3 },
          { name: "Irrigation Engineering", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-3",
    name: "Mining Engineering",
    code: "MINE",
    icon: "⛏️",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Mining Engineering Fundamentals", credits: 3 },
          { name: "Applied Chemistry", credits: 3, hasLab: true },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Functional English", credits: 3 },
          { name: "Application of ICT", credits: 3, hasLab: true },
          { name: "Applied Electricity", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Physical Geology", credits: 4, hasLab: true },
          { name: "Engineering Mechanics", credits: 4, hasLab: true },
          { name: "Linear Algebra", credits: 3 },
          { name: "Engineering Drawing & Graphics", credits: 3, hasLab: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Explosive and Blasting Engineering", credits: 3 },
          { name: "Technical Electives - I & II", credits: 3 },
          { name: "Introduction to Computing and Programming", credits: 3, hasLab: true },
          { name: "Calculus & Analytical Geometry", credits: 3 },
          { name: "Fluid Mechanics", credits: 4, hasLab: true },
          { name: "Fehm-e-Quran-I", credits: 1 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Expository Writing", credits: 3 },
          { name: "Rock Mechanics", credits: 4, hasLab: true },
          { name: "Differential Equations", credits: 3 },
          { name: "Probability & Statistics", credits: 3 },
          { name: "Applied Thermodynamics", credits: 4, hasLab: true },
          { name: "Fehm-e-Quran-II", credits: 1 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Technical Electives - I & II", credits: 3 },
          { name: "Surface Mine Design", credits: 3 },
          { name: "Underground Mine Design", credits: 3 },
          { name: "Mine Design Lab.", credits: 1, isLabOnly: true },
          { name: "Mine Surveying", credits: 4, hasLab: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Engineering Economics", credits: 2 },
          { name: "Project Management", credits: 2 },
          { name: "Mineral Processing-I", credits: 4, hasLab: true },
          { name: "Applied AI and Machine Learning", credits: 3, hasLab: true },
          { name: "Environmental Aspects of Mining", credits: 3 },
          { name: "Ore Reserves Estimation", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Arts and Humanities Electives", credits: 2 },
          { name: "Mineral Processing-II", credits: 4, hasLab: true },
          { name: "Mine Ventilation", credits: 3, hasLab: true },
          { name: "FYDP (Part-I)", credits: 3 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Mine Hazards & Safety", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "FYDP (Part-II)", credits: 3 },
          { name: "Technical Electives - III", credits: 3 },
          { name: "Mining laws and policies", credits: 3 },
          { name: "Mine Ventilation and Safety Lab", credits: 1, isLabOnly: true },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Occupational Health and Safety", credits: 1 },
          { name: "Mine Power, drainage & material handling", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-4",
    name: "Electrical Engineering - Computing & AI",
    code: "EE-AI",
    icon: "🤖",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Electricity and Magnetism", credits: 4, hasLab: true },
          { name: "Engineering Drawing", credits: 1, isLabOnly: true },
          { name: "Computer Fundamentals", credits: 3, hasLab: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Professional Ethics", credits: 2 },
          { name: "English Composition and Comprehension", credits: 3 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Computer Programming", credits: 4, hasLab: true },
          { name: "Engineering Mechanics", credits: 3, hasLab: true },
          { name: "Workshop Technology", credits: 1, isLabOnly: true },
          { name: "Calculus", credits: 3 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Pak Studies", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Differential Equations", credits: 3 },
          { name: "Digital Logic Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis-I", credits: 4, hasLab: true },
          { name: "Engineering Economics", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Introduction to AI Programming", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Probability & Random Variables", credits: 3 },
          { name: "Microprocessor Based System Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis - II", credits: 4, hasLab: true },
          { name: "Electromagnetic Field Theory", credits: 3 },
          { name: "Electronic Devices & Circuits", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Electrical Measurements & Instrumentation", credits: 4, hasLab: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Operating Systems", credits: 4, hasLab: true },
          { name: "Elective-I", credits: 4, hasLab: true },
          { name: "Complex Variables and Transforms", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Signal & Systems", credits: 4, hasLab: true },
          { name: "Technical Report Writing & Presentation Skills", credits: 3 },
          { name: "Digital Image Processing", credits: 4, hasLab: true },
          { name: "Communication System", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Computer Communication Networks", credits: 4, hasLab: true },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Electrical Machines", credits: 4, hasLab: true },
          { name: "Elective-II", credits: 4, hasLab: true },
          { name: "Elective-III", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Control Systems", credits: 4, hasLab: true },
          { name: "Engineering Management", credits: 2 },
          { name: "Elective-IV", credits: 3 },
          { name: "Project", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "dept-5",
    name: "Electrical Engineering - Power",
    code: "EE-PWR",
    icon: "⚡",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Electricity and Magnetism", credits: 4, hasLab: true },
          { name: "Engineering Drawing", credits: 1, isLabOnly: true },
          { name: "Computer Fundamentals", credits: 3, hasLab: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Professional Ethics", credits: 2 },
          { name: "English Composition and Comprehension", credits: 3 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Computer Programming", credits: 4, hasLab: true },
          { name: "Engineering Mechanics", credits: 3, hasLab: true },
          { name: "Workshop Technology", credits: 1, isLabOnly: true },
          { name: "Calculus", credits: 3 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Pak Studies", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Differential Equations", credits: 3 },
          { name: "Digital Logic Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis-I", credits: 4, hasLab: true },
          { name: "Engineering Economics", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Probability & Random Variables", credits: 3 },
          { name: "Microprocessor Based System Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis - II", credits: 4, hasLab: true },
          { name: "Electromagnetic Field Theory", credits: 3 },
          { name: "Electronic Devices & Circuits", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Electrical Measurements & Instrumentations", credits: 4, hasLab: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Electronic Circuits-II", credits: 4, hasLab: true },
          { name: "Elective-I (Power Generation)", credits: 3 },
          { name: "Complex Variables & Transforms", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Signals & Systems", credits: 4, hasLab: true },
          { name: "Technical Report Writing & Presentation Skills", credits: 3 },
          { name: "Communication System", credits: 4, hasLab: true },
          { name: "Applied Thermodynamics", credits: 3, hasLab: true },
          { name: "Elective-II (Power Electronics)", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Elective-III (Power System Analysis)", credits: 4, hasLab: true },
          { name: "Elective-IV (High Voltage Engineering)", credits: 4, hasLab: true },
          { name: "Electrical Machines", credits: 4, hasLab: true },
          { name: "Hydraulics & Hydraulics Machinery", credits: 3, hasLab: true },
          { name: "Entrepreneurship", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Control Systems", credits: 4, hasLab: true },
          { name: "Power Transmission & Distribution", credits: 3 },
          { name: "Elective-V (Power System Protection)", credits: 3, hasLab: true },
          { name: "Engineering Management", credits: 2 },
          { name: "Project", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "dept-6",
    name: "Electrical Engineering - Communication",
    code: "EE-COM",
    icon: "📡",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Electricity and Magnetism", credits: 4, hasLab: true },
          { name: "Engineering Drawing", credits: 1, isLabOnly: true },
          { name: "Computer Fundamentals", credits: 3, hasLab: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Professional Ethics", credits: 2 },
          { name: "English Composition and Comprehension", credits: 3 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Computer Programming", credits: 4, hasLab: true },
          { name: "Engineering Mechanics", credits: 3, hasLab: true },
          { name: "Workshop Technology", credits: 1, isLabOnly: true },
          { name: "Calculus", credits: 3 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Pak Studies", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Differential Equations", credits: 3 },
          { name: "Digital Logic Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis-I", credits: 4, hasLab: true },
          { name: "Engineering Economics", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Probability & Random Variables", credits: 3 },
          { name: "Microprocessor Based System Design", credits: 4, hasLab: true },
          { name: "Circuit Analysis-II", credits: 4, hasLab: true },
          { name: "Electromagnetic Field Theory", credits: 3 },
          { name: "Electronic Devices & Circuits", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Electrical Measurements & Instrumentation", credits: 4, hasLab: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Electronic Circuit II", credits: 4, hasLab: true },
          { name: "OOPs & Data Structures", credits: 3, hasLab: true },
          { name: "Complex Variables and Transforms", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Signal & Systems", credits: 4, hasLab: true },
          { name: "Technical Report Writing & Presentation Skills", credits: 3 },
          { name: "Data Communication", credits: 4, hasLab: true },
          { name: "Communication System", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Computer Communication Networks", credits: 4, hasLab: true },
          { name: "Elective-I", credits: 4, hasLab: true },
          { name: "Electrical Machines", credits: 4, hasLab: true },
          { name: "Elective-II (Digital Signal Processing)", credits: 4, hasLab: true },
          { name: "Entrepreneurship", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Control Systems", credits: 4, hasLab: true },
          { name: "Engineering Management", credits: 2 },
          { name: "Elective-III (Wireless Communication)", credits: 3 },
          { name: "Elective-IV (Intro to Machine Learning)", credits: 3, hasLab: true },
          { name: "Project", credits: 6 }
        ]
      }
    ]
  },
  {
    id: "dept-7",
    name: "Computer Systems Engineering",
    code: "CSE",
    icon: "💻",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Islamic Studies", credits: 2 },
          { name: "Pakistan Studies", credits: 2 },
          { name: "English Composition & Comprehension", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Applied Physics", credits: 3, hasLab: true },
          { name: "Information and Communication Technology (ICT)", credits: 4, hasLab: true },
          { name: "Engineering Workshop", credits: 1, isLabOnly: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Computer Programming", credits: 4, hasLab: true },
          { name: "Circuit Analysis", credits: 4, hasLab: true },
          { name: "Occupational Health & Safety", credits: 1 },
          { name: "Calculus", credits: 3 },
          { name: "Communication & Presentation Skills", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Digital Logic Design", credits: 4, hasLab: true },
          { name: "Electronic Circuits", credits: 4, hasLab: true },
          { name: "Object Oriented Programming", credits: 4, hasLab: true },
          { name: "Probability Methods in Engineering", credits: 3 },
          { name: "Differential Equations", credits: 3 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Operating Systems", credits: 4, hasLab: true },
          { name: "Signals & Systems", credits: 4, hasLab: true },
          { name: "Computer Communication & Networks", credits: 4, hasLab: true },
          { name: "Data Structures and Algorithms", credits: 4, hasLab: true },
          { name: "Engineering Economics", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Software Engineering", credits: 3, hasLab: true },
          { name: "CEDE-I", credits: 3 },
          { name: "Digital Signal Processing", credits: 4, hasLab: true },
          { name: "Computer Organization & Architecture", credits: 4, hasLab: true },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Complex Variables", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Technical Writing", credits: 3 },
          { name: "Microprocessor Based System Design", credits: 4, hasLab: true },
          { name: "Digital System Design", credits: 4, hasLab: true },
          { name: "Database Management System", credits: 4, hasLab: true },
          { name: "Professional Ethics", credits: 2 },
          { name: "Fehm-e-Quran-II", credits: 1 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Final Year Project-I", credits: 3 },
          { name: "MDEE-I", credits: 3 },
          { name: "CEDE-II", credits: 4 },
          { name: "CEDE-III", credits: 3 },
          { name: "Artificial Intelligence", credits: 3, hasLab: true },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Final Year Project-II", credits: 3 },
          { name: "MDEE-II", credits: 3 },
          { name: "CEDE-IV", credits: 4 },
          { name: "MDEE-III", credits: 3 },
          { name: "Entrepreneurship", credits: 2 }
        ]
      }
    ]
  },
  {
    id: "dept-8",
    name: "Software Engineering",
    code: "SE",
    icon: "⚙️",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Information and Communication Technologies", credits: 3, hasLab: true },
          { name: "Computer Programming", credits: 4, hasLab: true },
          { name: "Occupational Health and Safety", credits: 1 },
          { name: "Islamic Studies and Ethics", credits: 2 },
          { name: "Pakistan Studies and Global Perspective", credits: 2 },
          { name: "Functional English", credits: 2 },
          { name: "Calculus & Analytical Geometry", credits: 3 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Computer Architecture & Logic Design", credits: 4, hasLab: true },
          { name: "Discrete Structures", credits: 3 },
          { name: "Object Oriented Programming", credits: 4, hasLab: true },
          { name: "Applied Physics", credits: 3, hasLab: true },
          { name: "Communication Skills", credits: 2 },
          { name: "Linear Algebra", credits: 3 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Data Structures & Algorithms", credits: 4, hasLab: true },
          { name: "Software Engineering Fundamentals", credits: 3 },
          { name: "Complex Variables and Transforms", credits: 3 },
          { name: "Operating Systems", credits: 4, hasLab: true },
          { name: "Probability and Statistics", credits: 3 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Database Systems", credits: 4, hasLab: true },
          { name: "Software Design & Architecture", credits: 3, hasLab: true },
          { name: "Computer Networks", credits: 4, hasLab: true },
          { name: "Social Sciences Elective-I", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Software Engineering Elective-I", credits: 3 },
          { name: "Embedded Systems", credits: 3, hasLab: true },
          { name: "Design and Analysis of Algorithms", credits: 3 },
          { name: "Software Construction & Development", credits: 3, hasLab: true },
          { name: "Technical Writing and Presentation Skills", credits: 3 },
          { name: "Management Sciences Elective-I", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Software Engineering Elective-II", credits: 3 },
          { name: "Human Computer Interaction", credits: 3, hasLab: true },
          { name: "Software Project Management", credits: 3 },
          { name: "Software Quality Engineering", credits: 3 },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Cloud and Web Application Engineering", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Software Engineering Elective-III", credits: 3 },
          { name: "Software Engineering Elective-IV", credits: 3 },
          { name: "Formal Methods in Software Engineering", credits: 3 },
          { name: "Social Science Elective-II", credits: 2 },
          { name: "Final Year Project", credits: 3 },
          { name: "Fehm-e-Quran I", credits: 1 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Software Engineering Elective-V", credits: 3 },
          { name: "Information Security", credits: 3, hasLab: true },
          { name: "Software Engineering Elective-VI", credits: 3 },
          { name: "Internet of Things", credits: 3, hasLab: true },
          { name: "Fehm-e-Quran II", credits: 1 },
          { name: "Final Year Project", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-9",
    name: "Computer Science",
    code: "CS",
    icon: "🖥️",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Applications of ICT", credits: 3, hasLab: true },
          { name: "Programming Fundamentals", credits: 4, hasLab: true },
          { name: "Quantitative Reasoning-I", credits: 3 },
          { name: "Functional English", credits: 3 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Maths-I & Maths-II (Pre-Medical)", credits: 0 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Object Oriented Programming", credits: 4, hasLab: true },
          { name: "Digital Logic Design", credits: 4, hasLab: true },
          { name: "Database Systems", credits: 4, hasLab: true },
          { name: "Calculus and Analytic Geometry", credits: 3 },
          { name: "Islamic Studies", credits: 2 },
          { name: "Fehm-e-Quran-II", credits: 1 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Computer Organization & Assembly Language", credits: 3, hasLab: true },
          { name: "Theory of Automata", credits: 3 },
          { name: "Data Structures", credits: 4, hasLab: true },
          { name: "Software Engineering", credits: 3 },
          { name: "Introduction to Management", credits: 2 },
          { name: "Linear Algebra", credits: 3 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Artificial Intelligence", credits: 3, hasLab: true },
          { name: "Operating Systems", credits: 4, hasLab: true },
          { name: "Elective-I", credits: 3 },
          { name: "Elective-II", credits: 3 },
          { name: "Applied Physics", credits: 3, hasLab: true },
          { name: "Probability and Statistics", credits: 3 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Digital Marketing & E-Commerce", credits: 3 },
          { name: "Computer Networks", credits: 3, hasLab: true },
          { name: "Design & Analysis of Algorithms", credits: 3 },
          { name: "Elective-III", credits: 3 },
          { name: "Elective-IV", credits: 3 },
          { name: "Field Experience", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Information Security", credits: 3, hasLab: true },
          { name: "Quantitative Reasoning-II", credits: 3 },
          { name: "Elective-V", credits: 3 },
          { name: "Elective-VI", credits: 3 },
          { name: "Elective-VII", credits: 3 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Final Year Project-I", credits: 3 },
          { name: "Expository Writing", credits: 3 },
          { name: "Cloud Computing", credits: 3, hasLab: true },
          { name: "Elective-VIII", credits: 3 },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Professional Certification", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Final Year Project - II", credits: 3 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Ethical & Legal Issues in Computing", credits: 2 }
        ]
      }
    ]
  },
  {
    id: "dept-10",
    name: "Mechanical Engineering",
    code: "ME",
    icon: "🔧",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Applications of ICT", credits: 3, hasLab: true },
          { name: "Workshop Practice", credits: 2, isLabOnly: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Electrical Engineering", credits: 2, hasLab: true },
          { name: "Functional English", credits: 3 },
          { name: "Applied Physics", credits: 2 },
          { name: "Applied Physics Lab", credits: 1, isLabOnly: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Pakistan Studies", credits: 2 },
          { name: "Engineering Mechanics-I (Statics)", credits: 3 },
          { name: "Engineering Drawing and Graphics", credits: 1 },
          { name: "Engineering Drawing and Graph Lab", credits: 1, isLabOnly: true },
          { name: "Computer Systems & Programming", credits: 3, hasLab: true },
          { name: "Communication & Presentation Skills", credits: 2 },
          { name: "Calculus and Analytical Geometry", credits: 3 },
          { name: "Electronics Engineering", credits: 2 },
          { name: "Electrical & Electronics Engg. Lab", credits: 1, isLabOnly: true },
          { name: "Fehm-e-Quran-I", credits: 1 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Linear Algebra & Differential Equations", credits: 3 },
          { name: "Computer Aided Drawing (CAD)", credits: 2, hasLab: true },
          { name: "Mechanics of Materials-I", credits: 3 },
          { name: "Fluid Mechanics-I", credits: 3 },
          { name: "Thermodynamics-I", credits: 3 },
          { name: "Engineering Mechanics-II (Dynamics)", credits: 2 },
          { name: "Engineering Mechanics Lab", credits: 1, isLabOnly: true },
          { name: "Fehm-e-Quran-II", credits: 1 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Mechanics of Materials-II", credits: 3 },
          { name: "Mechanics of Materials Lab", credits: 1, isLabOnly: true },
          { name: "Engineering Metallurgy", credits: 2 },
          { name: "Engineering Metallurgy Lab", credits: 1, isLabOnly: true },
          { name: "Fluid Mechanics-II", credits: 2 },
          { name: "Fluid Mechanics Lab", credits: 1, isLabOnly: true },
          { name: "Numerical Analysis", credits: 3, hasLab: true },
          { name: "Expository Writing", credits: 3 },
          { name: "Civics and Community Engagement", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Engineering Economics", credits: 2 },
          { name: "Design of Machine Elements-I", credits: 2 },
          { name: "Thermodynamics-II", credits: 2 },
          { name: "Thermodynamics Lab", credits: 1, isLabOnly: true },
          { name: "Mechanics of Machines", credits: 2 },
          { name: "Mechanical Vibrations", credits: 2 },
          { name: "Mechanics of Machines & Vibration Lab", credits: 1, isLabOnly: true },
          { name: "Manufacturing Processes", credits: 2 },
          { name: "Manufacturing Processes Lab", credits: 1, isLabOnly: true },
          { name: "Probability and Statistics", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Design of Machine Elements-II", credits: 2 },
          { name: "Materials Engineering", credits: 3 },
          { name: "Finite Element Methods", credits: 3, hasLab: true },
          { name: "Internal Combustion Engines", credits: 2 },
          { name: "Heat and Mass Transfer", credits: 3 },
          { name: "Mechatronics & Robotics Engineering", credits: 2 },
          { name: "Mechatronics & Robotics Engg. Lab", credits: 1, isLabOnly: true },
          { name: "Complex Variables and Transforms", credits: 2 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Final Year Design Project-I", credits: 3 },
          { name: "Heating, Ventilation & Air Conditioning", credits: 3 },
          { name: "Production Automation (Technical Elective-I)", credits: 2 },
          { name: "Production Automation Lab", credits: 1, isLabOnly: true },
          { name: "Project Management", credits: 2 },
          { name: "Reverse Engineering & Inspection Techniques", credits: 2 },
          { name: "Reverse Engg. & Inspection Techniques Lab", credits: 1, isLabOnly: true },
          { name: "Applied AI & Machine Learning", credits: 2 },
          { name: "Applied AI & Machine Learning Lab", credits: 1, isLabOnly: true }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Occupational Health and Safety", credits: 2 },
          { name: "Entrepreneurship", credits: 1 },
          { name: "Final Year Design Project-II", credits: 3 },
          { name: "Heat Transfer and HVAC Lab", credits: 1, isLabOnly: true },
          { name: "Power Plants (Technical Elective-II)", credits: 2 },
          { name: "Power Plants & IC Engines Lab", credits: 1, isLabOnly: true },
          { name: "Control Engineering", credits: 2 },
          { name: "Measurement and Instrumentation", credits: 2 },
          { name: "Measurement, Instrumentation & Control Lab", credits: 1, isLabOnly: true }
        ]
      }
    ]
  },
  {
    id: "dept-11",
    name: "Mechatronics Engineering",
    code: "MCT",
    icon: "🦾",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Calculus and Analytical Geometry", credits: 3 },
          { name: "Engineering Drawing", credits: 2, hasLab: true },
          { name: "Electric Circuits Analysis", credits: 4, hasLab: true },
          { name: "Islamic Studies", credits: 2 },
          { name: "Functional English", credits: 3 },
          { name: "Occupational Health and Safety", credits: 1 },
          { name: "Applications of ICT", credits: 3, hasLab: true },
          { name: "Fehm-e-Quran-I", credits: 1 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Differential Equations", credits: 3 },
          { name: "Engineering Statics", credits: 2 },
          { name: "Computer Programming", credits: 3, hasLab: true },
          { name: "Applied Physics", credits: 3, hasLab: true },
          { name: "Arts and Humanities Elective", credits: 2 },
          { name: "Electronic Principles and Devices", credits: 4, hasLab: true },
          { name: "Workshops", credits: 1, isLabOnly: true },
          { name: "Fehm-e-Quran-II", credits: 1 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Electronic Circuits Design", credits: 4, hasLab: true },
          { name: "Engineering Dynamics", credits: 3 },
          { name: "Solid Modelling", credits: 1, isLabOnly: true },
          { name: "Materials & Manufacturing Processes", credits: 3, hasLab: true },
          { name: "Object Oriented Programming & Data Structures", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Multivariate Calculus and Transforms", credits: 3 },
          { name: "Actuating Systems", credits: 4, hasLab: true },
          { name: "Mechanics of Materials", credits: 3, hasLab: true },
          { name: "Digital Logic Design", credits: 3, hasLab: true },
          { name: "Fluid Mechanics", credits: 3, hasLab: true },
          { name: "Theory of Machines", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Probability and Statistics for Engineers", credits: 2 },
          { name: "Microcontrollers and Embedded Systems", credits: 4, hasLab: true },
          { name: "Design of Machine Elements", credits: 3 },
          { name: "Transducers and Instrumentation", credits: 4, hasLab: true },
          { name: "Modelling and Simulation", credits: 3, hasLab: true },
          { name: "Pakistan Studies", credits: 2 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Numerical Methods", credits: 2, hasLab: true },
          { name: "Mechatronics Systems Design", credits: 4, hasLab: true },
          { name: "Project Management", credits: 2 },
          { name: "Technical Elective I", credits: 3 },
          { name: "Control Systems", credits: 4, hasLab: true },
          { name: "Fundamentals of Thermal Sciences", credits: 2 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Robotics", credits: 4, hasLab: true },
          { name: "Expository Writing", credits: 3 },
          { name: "Technical Elective II", credits: 3 },
          { name: "Social Sciences Elective", credits: 2 },
          { name: "Artificial Intelligence", credits: 2, hasLab: true },
          { name: "FYP", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Technical Elective III", credits: 3 },
          { name: "Industrial Automation", credits: 3, hasLab: true },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Entrepreneurship", credits: 2 },
          { name: "FYP", credits: 4 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      }
    ]
  },
  {
    id: "dept-12",
    name: "Chemical Engineering",
    code: "CHE",
    icon: "🧪",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Islamic Studies", credits: 2 },
          { name: "Chemical Process Industries", credits: 3 },
          { name: "Engg. Drawing & Graphics", credits: 1, isLabOnly: true },
          { name: "Inorganic & Organic Chemistry", credits: 3, hasLab: true },
          { name: "Calculus", credits: 3 },
          { name: "Functional English", credits: 2 },
          { name: "Information & Communication Technology", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Workshop Practice", credits: 1, isLabOnly: true },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Physical & Analytical Chemistry", credits: 3, hasLab: true },
          { name: "Communication Skills", credits: 2 },
          { name: "Chemical Process Principles-I", credits: 2 },
          { name: "Applied Physics", credits: 3, hasLab: true },
          { name: "Differential Equations", credits: 3 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Linear Algebra", credits: 3 },
          { name: "Professional Ethics", credits: 2 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Fluid Mechanics-I", credits: 2, hasLab: true },
          { name: "Fuels & Energy", credits: 3, hasLab: true },
          { name: "Chemical Engg. Thermodynamics-I", credits: 2 },
          { name: "Electrical Engineering", credits: 3, hasLab: true },
          { name: "Chemical Engineering Principles-II", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Ideology & Constitution of Pakistan", credits: 2 },
          { name: "Civics & Community Engagement", credits: 2 },
          { name: "Particulate Technology", credits: 4, hasLab: true },
          { name: "Programming & Data Science", credits: 3, hasLab: true },
          { name: "Chemical Engg. Thermodynamics-II", credits: 3 },
          { name: "Fluid Mechanics-II", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Mass Transfer", credits: 3, hasLab: true },
          { name: "Numerical Analysis with Software Application", credits: 3, hasLab: true },
          { name: "Engineering Materials", credits: 2 },
          { name: "Heat Transfer", credits: 4, hasLab: true },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Environmental Engineering", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Occupational Health & Process Safety", credits: 2 },
          { name: "Separation Processes-I", credits: 3, hasLab: true },
          { name: "Experimental Design & Analysis", credits: 2 },
          { name: "Chemical Reaction Engineering", credits: 4, hasLab: true },
          { name: "Technical Report Writing & Presentation Skills", credits: 2 },
          { name: "Process Modeling & Simulation", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Separation Processes-II", credits: 3, hasLab: true },
          { name: "Depth Elective-I", credits: 2 },
          { name: "Chemical Plant Design", credits: 3 },
          { name: "Transport Phenomena", credits: 3 },
          { name: "Project Management", credits: 2 },
          { name: "FYP (Part-I)", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Engineering Economics", credits: 2 },
          { name: "Depth Elective-II", credits: 2 },
          { name: "Instrumentation & Process Control", credits: 4, hasLab: true },
          { name: "Depth Elective-III", credits: 2 },
          { name: "Maintenance & Utility Engineering", credits: 2 },
          { name: "FYP (Part-II)", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-13",
    name: "Industrial Engineering",
    code: "IE",
    icon: "🏭",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Functional English", credits: 3 },
          { name: "Basic Industrial Electronics", credits: 3, hasLab: true },
          { name: "Applications of ICT", credits: 3, hasLab: true },
          { name: "Engineering Mechanics", credits: 3, hasLab: true },
          { name: "Engineering Drawing and Graphics", credits: 2, hasLab: true }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Islamic Studies/Ethics", credits: 2 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Calculus and Analytical Geometry", credits: 3 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Arts and Humanities Elective", credits: 2 },
          { name: "Workshop Practice", credits: 1, isLabOnly: true },
          { name: "Basic Mechanical Engineering", credits: 3, hasLab: true },
          { name: "Materials Engineering", credits: 4, hasLab: true }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Linear Algebra and Differential Equation", credits: 3 },
          { name: "Computer Aided Design", credits: 1, isLabOnly: true },
          { name: "Occupational Health and Safety", credits: 2 },
          { name: "Mechanics of Materials", credits: 3, hasLab: true },
          { name: "Computer Programming", credits: 3, hasLab: true },
          { name: "Probability and Statistics", credits: 3 },
          { name: "Social Sciences Elective", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Numerical Analysis & Computer Application", credits: 3, hasLab: true },
          { name: "Logical and Critical Thinking", credits: 3 },
          { name: "Design of Mechanisms", credits: 3, hasLab: true },
          { name: "Manufacturing Systems", credits: 3 },
          { name: "Metrology and Statistical Quality Control", credits: 3, hasLab: true },
          { name: "Environment and Sustainability", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Work Study and Methods Engineering", credits: 3, hasLab: true },
          { name: "Operations Research", credits: 4 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Manufacturing Processes", credits: 3, hasLab: true },
          { name: "Human Factor Engineering", credits: 3, hasLab: true },
          { name: "Production Planning and Control", credits: 3 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Computer Aided Manufacturing", credits: 3, hasLab: true },
          { name: "Industrial Facilities Design", credits: 3 },
          { name: "Industrial System Simulation", credits: 3, hasLab: true },
          { name: "Expository Writing", credits: 3 },
          { name: "Project Management", credits: 2 },
          { name: "Instrumentation and Control", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Design of Experiments", credits: 4, hasLab: true },
          { name: "Industrial Repair and Maintenance", credits: 3 },
          { name: "Technical Elective-I", credits: 3 },
          { name: "Technical Elective-II", credits: 3 },
          { name: "Management Science Electives", credits: 2 },
          { name: "FYDP-I", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Entrepreneurship", credits: 2 },
          { name: "Technical Elective - III", credits: 3 },
          { name: "Technical Elective - IV", credits: 3 },
          { name: "Technical Elective - V", credits: 3 },
          { name: "Production/Industrial Automation", credits: 3, hasLab: true },
          { name: "FYDP-II", credits: 3 }
        ]
      }
    ]
  },
  {
    id: "dept-14",
    name: "Architecture (Non-Engineering)",
    code: "ARCH",
    icon: "🏛️",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Foundation Studio-I", credits: 6 },
          { name: "Visual Communication - I", credits: 3 },
          { name: "History of Art and Architecture-I", credits: 2 },
          { name: "Islamic Studies", credits: 2 },
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Functional English", credits: 3 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Foundation Studio-II", credits: 6 },
          { name: "Visual Communication II", credits: 3 },
          { name: "History of Art and Architecture-II", credits: 2 },
          { name: "Materials and Construction-I", credits: 2 },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Pakistan Studies", credits: 2 },
          { name: "Expository Writing", credits: 3 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Architectural Studio - I", credits: 6 },
          { name: "Visual Communication-III", credits: 2 },
          { name: "Quantitative Reasoning-I", credits: 3 },
          { name: "Energy and Environment-I", credits: 2 },
          { name: "History of Art and Architecture-III", credits: 2 },
          { name: "Materials and Construction-II", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Quantitative Reasoning-II", credits: 3 },
          { name: "Architectural Studio - II", credits: 7 },
          { name: "History of Art and Architecture-IV", credits: 2 },
          { name: "Structure for Architects-I", credits: 2 },
          { name: "Building Services & Systems-I", credits: 2 },
          { name: "Materials and Construction-III", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Digital Tools for Architects-I", credits: 2 },
          { name: "Architectural Studio - III", credits: 8 },
          { name: "Building Services & Systems-II", credits: 2 },
          { name: "Structures for Architects-II", credits: 2 },
          { name: "Theory of Architecture-I", credits: 2 },
          { name: "Materials and Construction-IV", credits: 2 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Digital Tools for Architects-II", credits: 2 },
          { name: "Architectural Studio - IV", credits: 8 },
          { name: "Building Services and Systems-III", credits: 2 },
          { name: "Interior Design", credits: 2 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Theory of Architecture-II", credits: 2 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Architectural Studio - V", credits: 8 },
          { name: "Urban Planning", credits: 2 },
          { name: "Parametric Design", credits: 2 },
          { name: "Construction Management", credits: 2 },
          { name: "Elective-I (Revit)", credits: 2 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Architectural Studio - VI", credits: 8 },
          { name: "Architectural Research Methods", credits: 2 },
          { name: "Entrepreneurship", credits: 2 },
          { name: "Urban Design", credits: 2 },
          { name: "Interdisciplinary Course (AI)", credits: 2 },
          { name: "Elective-II (GIS)", credits: 2 }
        ]
      },
      {
        sem: 9,
        courses: [
          { name: "Thesis Design-I", credits: 4 },
          { name: "Professional Practice", credits: 3 },
          { name: "Focus Studio", credits: 8 },
          { name: "Interdisciplinary Course", credits: 2 }
        ]
      },
      {
        sem: 10,
        courses: [
          { name: "Thesis Design-II", credits: 8 },
          { name: "Internship", credits: 3 },
          { name: "Elective-III (Housing/First Aid to Heritage)", credits: 2 },
          { name: "Elective-IV (Advance Building Construction Systems)", credits: 2 }
        ]
      }
    ]
  },
  {
    id: "dept-15",
    name: "Interior Design",
    code: "ID",
    icon: "🎨",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Foundation Studio-I", credits: 6 },
          { name: "Visual Communication-I", credits: 3 },
          { name: "History of Art & Architecture-I", credits: 2 },
          { name: "Islamic Studies", credits: 2 },
          { name: "Functional English", credits: 2 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Fahm-e-Quran-I", credits: 1 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Foundation Studio-II", credits: 6 },
          { name: "Visual Communication-II", credits: 3 },
          { name: "History of Art & Architecture-II", credits: 2 },
          { name: "Material & Construction-I", credits: 2 },
          { name: "Communication & Presentation Skills", credits: 2 },
          { name: "Fahm-e-Quran-II", credits: 1 },
          { name: "Pakistan Studies", credits: 2 }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Interior Design Studio - I", credits: 5 },
          { name: "Model Making", credits: 3 },
          { name: "Introduction to ICT", credits: 3, hasLab: true },
          { name: "History of Interior Architecture", credits: 2 },
          { name: "Material & Construction-II", credits: 3 },
          { name: "Energy & Environment", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Furniture Design-I", credits: 3 },
          { name: "Application of Digital Tools in Design-I", credits: 3, hasLab: true },
          { name: "Interior Design Studio - II", credits: 5 },
          { name: "Building Services & Systems", credits: 2 },
          { name: "Elective-I (Technical Drawings)", credits: 2 },
          { name: "Interior Product Design", credits: 3 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Application of Digital Tools in Design - II", credits: 3, hasLab: true },
          { name: "Interior Structure & Systems", credits: 2 },
          { name: "Interior Design Studio - III", credits: 4 },
          { name: "Graphics Design-I", credits: 2 },
          { name: "Interior Space Planning", credits: 2 },
          { name: "Furniture Design-II", credits: 2 },
          { name: "Elective-II (Event Management)", credits: 2 }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Lighting & Acoustic Design", credits: 3 },
          { name: "Graphics Design-II", credits: 3 },
          { name: "Interior Design Studio - IV", credits: 4 },
          { name: "Textile Design", credits: 3 },
          { name: "Elective-III (Interior Graphics & Visualization)", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Entrepreneurship", credits: 3 },
          { name: "Internship", credits: 3 },
          { name: "Landscape Design", credits: 3 },
          { name: "Interior Design Studio - V", credits: 4 },
          { name: "Research & Methods", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Capstone Project", credits: 8 },
          { name: "Dissertation", credits: 2 },
          { name: "Professional Practice & Management", credits: 3 },
          { name: "Elective-IV (Digital Marketing)", credits: 2 }
        ]
      }
    ]
  },
  {
    id: "dept-16",
    name: "BS Mathematics with AI",
    code: "MATH-AI",
    icon: "📐",
    semesters: [
      {
        sem: 1,
        courses: [
          { name: "Quantitative Reasoning-I", credits: 3 },
          { name: "Functional English", credits: 3 },
          { name: "Islamic Studies/Ethics", credits: 2 },
          { name: "Applied Physics (Natural Sciences)", credits: 3, hasLab: true },
          { name: "ICT", credits: 3, hasLab: true },
          { name: "Pak Studies", credits: 2 }
        ]
      },
      {
        sem: 2,
        courses: [
          { name: "Calculus-I", credits: 3 },
          { name: "Discrete Mathematics", credits: 3 },
          { name: "Ideology and Constitution of Pakistan", credits: 2 },
          { name: "Expository Writing", credits: 3 },
          { name: "Quantitative Reasoning-II", credits: 3 },
          { name: "Introduction to Programming", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 3,
        courses: [
          { name: "Calculus-II", credits: 3 },
          { name: "Ordinary Differential Equations", credits: 3 },
          { name: "Group Theory-I", credits: 3 },
          { name: "Introduction to Mechanics", credits: 3 },
          { name: "Social Science", credits: 2 },
          { name: "Arts and Humanities", credits: 2 }
        ]
      },
      {
        sem: 4,
        courses: [
          { name: "Calculus-III", credits: 3 },
          { name: "Numerical Analysis-I", credits: 3, hasLab: true },
          { name: "Data Structure and Algorithms", credits: 3, hasLab: true },
          { name: "Linear Algebra", credits: 3 },
          { name: "Civics and Community Engagement", credits: 2 },
          { name: "Entrepreneurship", credits: 2 }
        ]
      },
      {
        sem: 5,
        courses: [
          { name: "Fehm-e-Quran-I", credits: 1 },
          { name: "Real Analysis-I", credits: 3 },
          { name: "Topology", credits: 3 },
          { name: "Partial Differential Equations", credits: 3 },
          { name: "Number Theory", credits: 3 },
          { name: "Advanced Programming", credits: 3, hasLab: true }
        ]
      },
      {
        sem: 6,
        courses: [
          { name: "Real Analysis-II", credits: 3 },
          { name: "Complex Analysis", credits: 3 },
          { name: "Functional Analysis", credits: 3 },
          { name: "Introduction to Machine Learning", credits: 3, hasLab: true },
          { name: "Introduction to Artificial Intelligence", credits: 3, hasLab: true },
          { name: "Fehm-e-Quran-II", credits: 1 },
          { name: "Internship (summer)", credits: 3 }
        ]
      },
      {
        sem: 7,
        courses: [
          { name: "Differential Geometry", credits: 3 },
          { name: "Scientific Writing and Research Methods", credits: 3 },
          { name: "Programming for Artificial Intelligence", credits: 3, hasLab: true },
          { name: "Elective-I (AI Elec)", credits: 3 },
          { name: "Elective-II", credits: 3 },
          { name: "Elective-III", credits: 3 }
        ]
      },
      {
        sem: 8,
        courses: [
          { name: "Elective-IV (AI Elec)", credits: 3 },
          { name: "Elective-V (AI Elec)", credits: 3 },
          { name: "Elective-VI (AI Elec)", credits: 3 },
          { name: "Elective-VII", credits: 3 },
          { name: "Elective-VIII", credits: 3 },
          { name: "Project", credits: 3 }
        ]
      }
    ]
  }
];

// Grade Point Mapping (UET 4.00 Scale)
const UET_GRADE_SCALE = {
  "A":  { points: 4.00, desc: "Excellent / High Distinction", color: "#22c55e" },
  "A-": { points: 3.67, desc: "Very Good / Distinction",        color: "#10b981" },
  "B+": { points: 3.33, desc: "Good",                         color: "#06b6d4" },
  "B":  { points: 3.00, desc: "Above Average",                 color: "#3b82f6" },
  "B-": { points: 2.67, desc: "Average",                       color: "#6366f1" },
  "C+": { points: 2.33, desc: "Satisfactory",                  color: "#8b5cf6" },
  "C":  { points: 2.00, desc: "Acceptable",                    color: "#eab308" },
  "C-": { points: 1.67, desc: "Marginal Pass",                 color: "#f97316" },
  "D+": { points: 1.33, desc: "Minimum Pass",                  color: "#ef4444" },
  "D":  { points: 1.00, desc: "Low Pass",                      color: "#dc2626" },
  "F":  { points: 0.00, desc: "Fail / Repeat Required",        color: "#991b1b" }
};
