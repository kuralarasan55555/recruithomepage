import React, { useEffect, useState } from 'react';
import './HomeStyle.css';
import JobFilter from './JobFilter';


const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterExperience, setFilterExperience] = useState('');
  const [filterRole, setFilterRole] = useState('');

  useEffect(() => {
    //Fetch Jobs
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      //Jobs 
      const sampleJobs = [
        {
          id: 1,
          title: 'Software Engineer',
          description: 'We are looking for a skilled software engineer...',
          location: 'Bangalore, India',
          experience: '2-5',
          company: 'Tech Solutions Inc.',

        },
        {
          id: 2,
          title: 'Product Manager',
          description: 'Join our dynamic team as a product manager...',
          location: 'San Francisco, USA',
          experience: '6-7',
          company: 'Innovative Tech Co.',

        },
        {
          id: 3,
          title: 'Data Scientist',
          description: 'Seeking a talented data scientist to...',
          location: 'Mumbai, India',
          experience: '3-7',
          company: 'Data Analytics Corp.',
         
        },
        {
          id: 4,
          title: 'Web developer',
          description: 'Looking for responsive website designer...',
          location: 'Coimbatore, India',
          experience: '3-7',
          company: 'Web Designing Corp.',
    
        },
        {
          id: 5,
          title: 'Full Stack Developer',
          description: 'Looking for application devloper...',
          location: 'Chennai, India',
          experience: '6-7',
          company: 'ABC Corp.',

        },
        {
          id: 6,
          title: 'Backend Developer',
          description: 'Looking for python devloper...',
          location: 'Hyderabad, India',
          experience: '0-5',
          company: 'ABC Corp.',

        }
        // Same job objects as before...
      ];

      setJobs(sampleJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  //Check job experience with selected experience
  function checkexperience(filterExperience,jobexperience)
  {
   
    if(!filterExperience)
      return true
    const [minString, maxString] = jobexperience.split('-');     
    const selectedExperienceNum = parseInt(filterExperience);  
    const [min, max] = [parseInt(minString), parseInt(maxString)];
    if(filterExperience[1]==='+')
      return selectedExperienceNum+1 <= max;
    return selectedExperienceNum >= min && selectedExperienceNum <= max;
      
    
  }

  // Filter the jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    console.log(filterExperience)
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLocation === '' ||
        job.location.toLowerCase() === filterLocation.toLowerCase()) &&
      (filterRole === '' || job.title.toLowerCase() === filterRole.toLowerCase())&&(
        filterExperience==='' || checkexperience(filterExperience,job.experience)
      )
    );
  });

  const resetFilters = () => {
    setFilterLocation('');
    setFilterExperience('');
    setFilterRole('');
    // Reset other filter states if added in the future
  };


  return (
    <div className="home-page">
      <header className="p-4 bg-light">
        <h1>Welcome to Recruitment Portal</h1>
        <h3>Find the best talent for your company</h3>
      </header>
     
          <JobFilter
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
            filterExperience={filterExperience}
            setFilterExperience={setFilterExperience}
            filterRole={filterRole}
            setFilterRole={setFilterRole}
            resetFilters={resetFilters}
          />
       
        <div className='jobs-container'>
        {/* Display filtered job listings */}
        {filteredJobs.length?
        <div className="job-listings">
          {filteredJobs.map((job) => (
                       <div key={job.id} className="job-card card mb-4">
                    
              <h3 className="card-header">{job.title}</h3>
              <div className="card-body">
                <p className="card-text">{job.description}</p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience} years
                </p>
                <p>
                  <strong>Company:</strong> {job.company}
                </p>
              </div>
              <div className="footer">
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
          ))}
        </div>:<div style={{textAlign:'center'}}><h1>No search result found</h1></div> }
      
      {/* Add more sections as needed */}
     
    </div>
  </div>
  );
};

export default HomePage;
