
import Card from "./components/Card";

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.he3UIgi2qaF2zeUQ3ct2RQHaGO?pid=Api&P=0&h=180",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?pid=Api&P=0&h=180",
    company: "Google",
    datePosted: "10 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?pid=Api&P=0&h=180",
    company: "Meta",
    datePosted: "2 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.D2RNn1GFKt44SfQaLqFlaQHaHa?pid=Api&P=0&h=180",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.-5Yg4TSKfCTJ4oPHsqjxaQHaHZ?pid=Api&P=0&h=180",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$105/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    company: "Netflix",
    datePosted: "6 weeks ago",
    post: "Graphics Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Gh8k1gS5C-mc1W9h1Z3LSQHaEK?pid=Api&P=0&h=180",
    company: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.i6lcNGxWVew9K4paPkov0AHaEK?pid=Api&P=0&h=180",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "Motion Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.gG9rAmqAeVZ0g9Q5lAtagwHaHa?pid=Api&P=0&h=180",
    company: "Spotify",
    datePosted: "2 weeks ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.ebcAjlsxNveblKOlGF4VSwHaEK?pid=Api&P=0&h=180",
    company: "Samsung",
    datePosted: "12 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Seoul, South Korea"
  }
];


  console.log(jobOpenings);


  return (

  

  <div className="parent">

{jobOpenings.map(function(elem,idx){
  return <div key={idx}>
    <Card  company={elem.company}  datePosted={elem.datePosted} post={elem.post} brandLogo={elem.brandLogo} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2}/>
  </div>
})}
  </div>
    

  
  )
}

export default App;


