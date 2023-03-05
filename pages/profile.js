import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className="container mt-10">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6 p-2 border-1 border-dark">
          <h3 className='text-center'>Login</h3>
            <form className="card px-5 py-5" id="form1">
                <div className="form-data" >
                    <div className="form-group mb-3"> 
                    <label  className="form-label">Emaill</label>
                     <input autocomplete="off" type="text" className='form-control' />
                    </div>
                    <div className="form-group mb-3"> 
                    <label  className="form-label">Password</label>
                     <input autocomplete="off" type="password" className='form-control' />
                    </div>
                    <div className="mb-3 mt-5"> <button type='submit' className="btn btn-lg btn-dark">Login</button> </div>
                </div>
            </form>
            <div className="signup mt-3 d-flex gap-2">
              New To ANI MERCH
              <Link href={'/signup'}>Signup</Link> For New Account
            </div>
        </div>
    </div>
</div>
  )
}

export default Profile
