import { accessories, bike, bikeengine, cleaning, gear } from "../assets/images/index";

const bookings = [
    {
      id: 1,
      logo: accessories, // Bike icon
      name: "Basic Bike Service",
      charge: "₹299",
      customerName: "John Doe",
    },
    {
      id: 2,
      logo: bike, // Tools & gear icon
      
      name: "Full Bike Service",
      charge: "₹799",
      customerName: "Jane Smith",
    },
    {
      id: 3,
      logo: bikeengine,
      name: "Bike Engine Repair",
      charge: "₹1499",
      customerName: "Sam Wilson",
    },
    {
      id: 4,
      logo: gear,
      name: "Brake Replacement",
      charge: "₹499",
      customerName: "Emily Clark",
    },
    {
      id: 5,
      logo: cleaning,
      name: "Bike Washing & Polishing",
      charge: "₹199",
      customerName: "Michael Brown",
    },
  ];
  
  export default bookings;
  