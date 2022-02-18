import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ConnectStreams from '../ConnectMe';
import MA from '../MA';
import $ from 'jquery';

import Lottie from "lottie-react";
import loader from '../lotties/loader.json'
import './forms.css';
class ThankYou extends Component {


  componentDidMount() {
    setTimeout(() => {
      
      const lottie = document.getElementById('lottie');

      const thanks = document.getElementById('lottie');

      const hidden = document.getElementsByClassName('hidden')

      const header = document.getElementById('head')

      $(lottie).hide()
      $(hidden).show();
      $(header).hide();

      console.log('showed all')

    }, 5000)
  }




  render() {

      

      const urlSearch = window.location.search;

      const urlParams = new URLSearchParams(urlSearch);

      const firstName = urlParams.get('first_name');

      
      const phone = urlParams.get('phone_home');

      const tele = document.getElementById('tele').value;

      console.log('tele value is ' + tele)

      console.log(phone)
      return (
        
        <div >
          
         


                <div className="bg-blue-500 headerText justify-center align-middle text-center h-screen " id='thankyou'>
                    <h2>Get Your Free Business Insurance Quote</h2>
          </div>

          {/* Lottie Title */}  

          <section className="py-8" id='head'>
  <div className="container px-4 mx-auto">
    <div className="py-12 bg-blue-500 rounded overflow-hidden rounded-lg">
      <div className="flex flex-wrap">
        <div className="w-full md:w-full px-6 md:pl-12 lg:pr-0 mb-10 md:mb-0 text-center">
          <h3 className="mb-2 lg:text-4xl sm:text-lg font-medium text-white text-center">
                      <span className="text-white"  data-config-id="header-p1">{firstName}, </span>
            <span data-config-id="header-p2">We are matching you with your best options!</span>
          </h3>
                    <p className="lg:text-xl sm:text-sm font-medium text-blue-100 text-center justify-center" data-config-id="desc">Please wait while we fetch your best plans!</p>
        </div>
        <div className="relative w-full md:w-1/2 px-12">
        </div>
      </div>
    </div>
  </div>
</section>


        
          <Lottie animationData={loader} loop={true} id='lottie' className="lottie" />

      <div className=" hidden bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 maDiv content-center" id='thankyou'>
      <div className="px-4 py-8 sm:px-10">


          <div className=" pt-1">
            <div className=" mb-2 items-center justify-between">
              
              <div className="text-center justify-center align-center">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 content-center justify-center">
                  {firstName}'s Top Matches
                </span> 
              </div>
            </div>
          
          </div>

          </div>

            </div>
          <div className="hidden" id="thankyou">
          <ConnectStreams moduleId="1675" phoneNumber={tele} className="hidden" id='thankyou'  />

          <MA />
</div>        


          </div>
  
        )
    }
}

export default withRouter(ThankYou)
