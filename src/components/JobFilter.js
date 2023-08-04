import React from 'react';
import './HomeStyle.css';

const JobFilter = ({
  filterLocation,
  setFilterLocation,
  filterExperience,
  setFilterExperience,
  filterRole,  // Add the role prop
  setFilterRole,  // Add the setter for the role prop
  resetFilters,
}) => {
  const locations = ['Bangalore, India', 'San Francisco, USA', 'Mumbai, India', 'Coimbatore, India','Hyderabad, India'/* Add more locations */];
  const experiences = ['1', '2','3','4','5','5+' /* Add more experience levels */];
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer','Software Engineer',
               'Product Manager','Data Scientist','Web developer' /* Add more roles */];

  return (
    <div className="job-filter-container">
    <div className="job-filter">
      <h2 className="filter-heading">
      <i class="fa fa-filter" style={{color:'#87CEEB',paddingRight:10}}/>Filter Jobs
      </h2>
      <div className="form-group">
        <label>Location:</label>
        <select className="form-control" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Experience:</label>
        <select className="form-control" value={filterExperience} onChange={(e) => setFilterExperience(e.target.value)}>
          <option value="">All Experience Levels</option>
          <option value="0">Fresher</option>
          {experiences.map((experience) => (
            <option key={experience} value={experience}>
              {experience}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Role:</label>
        <select className="form-control" value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <button className="btn btn-primary" onClick={resetFilters}>Reset Filters</button>
      </div>
    </div>
    </div>
  );
};

export default JobFilter;
