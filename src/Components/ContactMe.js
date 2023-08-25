import React from 'react'


export default function ContactMe() {
    // const handleForm = () => {
    //     console.log("Form is submitted");
    //     props.showAlert("Thanks for Connecting!", "success");
    //     // it is not working 25-08-2023
    // }
  return (
    <>
    <div class="mb-3 ">
        <div class="mb-3 mx-5">
            <label for="exampleFormControlInput1 " class="form-label">Email address</label>
                <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3 mx-5">
            <label for="exampleFormControlTextarea1" class="form-label ">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button"  class="btn btn-primary mx-5">Submit</button>
    </div>
    </>
  )
}
