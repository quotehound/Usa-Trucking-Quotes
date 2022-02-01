import React, { Component } from 'react'

class MA extends Component {



    componentDidMount() {

        const renderScript = document.createElement("script");

          renderScript.innerHTML = "var matchingConfiguration ={'src': '669167','ni_ad_client':'669167','zipcode': localStorage.getItem('zip'),'inventorytype': 'thankyoupage','var1':	'subid 1','var2':	'subid 2','var3':	'subid 3','trn_id':'transactionId','coveragetype':	'Business Property','standard_industry_code': '2441','general_liability':'1','commercial_auto':	'1','commercial_property': '0','professional_liability': '1','session_ref': document.referrer,'lp_url':'usatruckingquotes.com'};sh.initialize(matchingConfiguration, 'qsWidgetContainer');";

        
          

         document.body.appendChild(renderScript);

         const script = document.createElement("script");

         script.src = "//www.nextinsure.com/listingdisplay/loader/sh";
         script.async = true;
         document.body.appendChild(script);
    }


    render() {
        return (



<div id="qsWidgetContainer" />


   
        )
    }
}

export default MA;