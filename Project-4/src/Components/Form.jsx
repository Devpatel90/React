import { useState } from 'react';

function Func() {
  const [state, setState] = useState({
    name: '',
    email: '',
    skill: [''],
    hobby: ['']
  });

  const [submitted, setSubmitted] = useState(null);

  const handleAddSkill = () => {
    setState({ ...state, skill: [...state.skill, ''] });
  };

  const handleAddHobby = () => {
    setState({ ...state, hobby: [...state.hobby, ''] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSkillChange = (e, index) => {
    let skills = [...state.skill];
    skills[index] = e.target.value;
    setState({ ...state, skill: skills });
  };

  const handleHobbyChange = (e, index) => {
    let hobbies = [...state.hobby];
    hobbies[index] = e.target.value;
    setState({ ...state, hobby: hobbies });
  };

  const handleDeleteSkill = (index) => {
    let skills = [...state.skill];
    skills.splice(index, 1);
    setState({ ...state, skill: skills });
  };

  const handleDeleteHobby = (index) => {
    let hobbies = [...state.hobby];
    hobbies.splice(index, 1);
    setState({ ...state, hobby: hobbies });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(state);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">User Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          {/* Skills Section */}
          <div className="mb-4">
            <label className="form-label">Skills</label>
            {state.skill.map((skill, index) => (
              <div className="d-flex align-items-center mb-2" key={index}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter a skill"
                  value={skill}
                  onChange={(e) => handleSkillChange(e, index)}
                  required
                />
                {state.skill.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteSkill(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddSkill}
            >
              Add Skill
            </button>
          </div>

          {/* Hobbies Section */}
          <div className="mb-4">
            <label className="form-label">Hobbies</label>
            {state.hobby.map((hobby, index) => (
              <div className="d-flex align-items-center mb-2" key={index}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter a hobby"
                  value={hobby}
                  onChange={(e) => handleHobbyChange(e, index)}
                  required
                />
                {state.hobby.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteHobby(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddHobby}
            >
              Add Hobby
            </button>
          </div>

          <button type="submit" className="btn btn-success w-100">Submit</button>
        </form>
      </div>

      {submitted && (
        <div className="card shadow-lg p-4 mt-4">
          <h3 className="text-center mb-4">Submitted Data</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Skills:</strong></p>
          <ul>
            {submitted.skill.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p><strong>Hobbies:</strong></p>
          <ul>
            {submitted.hobby.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Func;
