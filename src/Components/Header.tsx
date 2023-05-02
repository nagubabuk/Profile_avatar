import React, { useState } from 'react';
import '../App.css'


const HeaderComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [openform, setOpenForm] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const profile = {
      id: Date.now(),
      name,
      email,
    };
    setName('');
    setEmail('');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div className='header_container'>
      <div>
      <button type="button" className="btn btn-primary mt-3 me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="add">Add Profile</button>
      </div>
      {openform &&
        <div>
          <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Add Profile</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
             <div>
               <label htmlFor="name" className='col-form-label'>Name:</label>
               <input
                 type="text"
                 id="name"
                 className='form-control'
                 value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                className='form-control'
                onChange={handleEmailChange}
                required
              />
            </div>
          </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }

    </div>

  );
}
export default HeaderComponent;
