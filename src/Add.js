import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Add = () =>{

  let InputItem=" ", InputItem2=" ", InputItem3=" ", InputItem4=" ", InputItem5=" ", InputItem6=" ";
  let InputItem7=" ", InputItem8=" ";

  let Lands =[], Lands2 =[], Lands3 =[], Lands4 =[], Lands5 =[], Lands6 =[], Lands7 =[], Lands8 =[];


  const ItemE = (event) =>{
     if(event.target.value.length>=1){
        InputItem=event.target.value;
      }
     else{
      InputItem=" ";
     }   
     };

  const ItemE2 = (event) =>{
   if(event.target.value.length>=1 ){
      InputItem2=event.target.value;
    }
   else{
    InputItem2=" ";
   }   
     };
   
  const ItemE3 = (event) =>{
   if(event.target.value.length>=1){
      InputItem3=event.target.value;
    }
   else{
    InputItem3=" ";
   }   
     };  

  const ItemE4 = (event) =>{
   if(event.target.value.length>=1 && event.target.value>0){
      InputItem4=event.target.value;
    }
   else{
    InputItem4=" ";
   }   
     };

  const ItemE5 = (event) =>{
   if(event.target.value.length>=1){
      InputItem5=event.target.value;
    }
   else{
    InputItem5=" ";
   }   
     };  

  const ItemE6 = (event) =>{
   if(event.target.value.length>=1){
      InputItem6=event.target.value;
    }
   else{
    InputItem6=" ";
   }   
     };

  const ItemE7 = (event) =>{
   if(event.target.value.length>=1){
      InputItem7=event.target.value;
    }
   else{
    InputItem7=" ";
   }   
     };

  const ItemE8 = (event) =>{
   if(event.target.value.length==10 && event.target.value>0){
      InputItem8=event.target.value;
    }
   else{
    InputItem8=" ";
   }   
     };


const[warning, setWarning]=useState(" ");
const listingall = ()=>{
   let condition=0; 

        if(InputItem!=" " && InputItem2!=" " && InputItem3!=" " && InputItem4!=" " && 
           InputItem5!=" " && InputItem6!=" " && InputItem7!=" " && InputItem8!=" "){
                 
            Lands.filter((val)=>{
               if(val.toLowerCase().includes(InputItem.toLowerCase())){
                  condition=1;
               }
                
             });
            
             if(condition==0){
            Lands.push(InputItem);
            localStorage.setItem("Lands", JSON.stringify(Lands));
            Lands2.push(InputItem2);
            localStorage.setItem("Lands2", JSON.stringify(Lands2));
            Lands3.push(InputItem3);
            localStorage.setItem("Lands3", JSON.stringify(Lands3));
            Lands4.push(InputItem4);
            localStorage.setItem("Lands4", JSON.stringify(Lands4));
            Lands5.push(InputItem5);
            localStorage.setItem("Lands5", JSON.stringify(Lands5));
            Lands6.push(InputItem6);
            localStorage.setItem("Lands6", JSON.stringify(Lands6));
            Lands7.push(InputItem7);
            localStorage.setItem("Lands7", JSON.stringify(Lands7));
            Lands8.push(InputItem8);
            localStorage.setItem("Lands8", JSON.stringify(Lands8));
   
            InputItem=" "; InputItem2=" "; InputItem3=" "; InputItem4=" "; InputItem5=" ";
             InputItem6=" ";InputItem7=" "; InputItem8=" ";
            setfORM(" ");
            condition=0;
            }
            else{
               alert(`${InputItem} is already present in the Land name list`);
            }
           }
        else{
            setWarning(
                <div onClick={cancleWarning} className="canclewarning">
                   <a className="canclewrningword">Please fill all details with suitable input.
                   </a></div>
            );
        }
      
     };


     if(localStorage.getItem('Lands')==null){
        Lands=[];
        Lands2=[];
        Lands3=[];
        Lands4=[];
        Lands5=[];
        Lands6=[];
        Lands7=[];
        Lands8=[];
     }
     else{
        Lands= JSON.parse(localStorage.getItem('Lands'));
        Lands2= JSON.parse(localStorage.getItem('Lands2'));
        Lands3= JSON.parse(localStorage.getItem('Lands3'));
        Lands4= JSON.parse(localStorage.getItem('Lands4'));
        Lands5= JSON.parse(localStorage.getItem('Lands5'));
        Lands6= JSON.parse(localStorage.getItem('Lands6'));
        Lands7= JSON.parse(localStorage.getItem('Lands7'));
        Lands8= JSON.parse(localStorage.getItem('Lands8'));
     }

     const cancleWarning = ()=>{
        setWarning(" ");
     }



 const[DETAILS, setdETAILS] = useState(" "); 
    const Showdetails = (e)=>{
      let ID =e.currentTarget.value;

        setdETAILS(<>
        <div className="fixedShowdetails">
            <div className="Showdetails">
            <div className="Showdetail2"><a className="minwithofdetails">Detail of Land :: </a><a className="Showdetail2LandsID">{Lands[ID]}</a>
            <span className="update1"> 
                <Button value={ID} onClick ={FINALDETAILS}><a className="Btn">Saved</a></Button>
            </span></div>
             <div className="Showdetail2"><a className="same2">ID : </a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="2">{Lands2[ID]}</a></div>
             <div className="Showdetail2"><a className="same2">NAME : </a><a contenteditable="true" 
             onInput={EditthisItem} value="3" className="LANDSFILLED" id="3">{Lands3[ID]}</a></div>
             <div className="Showdetail2"><a className="same2">AREA : </a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="4">{Lands4[ID]}</a>Rate/Sq.ft</div>
             <div className="Showdetail2"><a className="same2">CITY : </a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="5">{Lands5[ID]}</a></div>
             <div className="Showdetail2"><a className="same2">STATE : </a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="6">{Lands6[ID]}</a></div>
             <div className="Showdetail2"><a className="same2">COUNTRY : </a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="7">{Lands7[ID]}</a></div>
             <div className="Showdetail2"><a className="same2">PH. NUM. :</a><a contenteditable="true" 
             onInput={EditthisItem} className="LANDSFILLED" id="8" >{Lands8[ID]}</a></div>
            
            </div>
         </div> 
           </>);
           
    }

    
    let InputEdit=" ", idd;
    const EditthisItem = (e)=>{
      
       idd=e.currentTarget.id;
       if(e.currentTarget.textContent.length>=1){
         InputEdit=e.currentTarget.textContent;
       }
       else{
         InputEdit=" ";
       }
       console.log(idd);
   }

  const FINALDETAILS = (e)=>{
     if(idd>=1 && idd<=8){
      finalLands(idd, e.currentTarget.value ,InputEdit)
    }
  } 

    const finalLands = ( x, id, editvalue) =>{
       let condition=0;
       let land;
     if(x==1){land=Lands;}else if(x==2){ land=Lands2;}else if(x==3){ land=Lands3;}
     else if(x==4){land=Lands4;}else if(x==5){ land=Lands5;}else if(x==6){ land=Lands6;}
     else if(x==7){ land=Lands7;}else if(x==8){ land=Lands8;}

      let another_array=[];
      if(x!=8 && x!=4){
       if(editvalue!=" "){
        alert(`Land details changed from ${land[id]} to ${editvalue}`)
       }
      }
      else if(x==8){
         if(editvalue.length!=10 || editvalue<0){
            condition=1;
            if(editvalue.length!=10 && editvalue>0){
            alert(`Phone number can not be ${editvalue.length} digit`);
             }
             else if(editvalue<0){
               alert(`Phone number can not be negative`);
                }
             editvalue=land[id];
         }
         else if(editvalue!=" "){
            alert(`Phone number changed from ${land[id]} to ${editvalue}`)
           }
      }
      else if(x==4){
         if(editvalue<=0){
            condition=1;
            alert(`Area of Land can not be 0 or negative`);
            editvalue=land[id];
             }
             else if(editvalue!=" "){
               alert(`Land Area changed from ${land[id]} to ${editvalue}`)
              }
      }

   if(condition==0){
      land.map((value, index)=>{
        if(value==land[id] && index==id){
           if(editvalue!=" "){
            another_array.push(editvalue);
            }
           else{
            another_array.push(value);
           }
        }
        else{
            another_array.push(value);
        }
      });

      if(x==1){localStorage.setItem("Lands", JSON.stringify(another_array));
      if(localStorage.getItem('Lands')==null){
        Lands=[];
      }
      else{
         Lands= JSON.parse(localStorage.getItem('Lands'));
      }}else if(x==2){localStorage.setItem("Lands2", JSON.stringify(another_array));
      if(localStorage.getItem('Lands2')==null){
        Lands2=[];
      }
      else{
         Lands2= JSON.parse(localStorage.getItem('Lands2'));
      }}
      else if(x==3){localStorage.setItem("Lands3", JSON.stringify(another_array));
      if(localStorage.getItem('Lands3')==null){
        Lands3=[];
      }
      else{
         Lands3= JSON.parse(localStorage.getItem('Lands3'));
      }}
      else if(x==4){localStorage.setItem("Lands4", JSON.stringify(another_array));
      if(localStorage.getItem('Lands4')==null){
        Lands4=[];
      }
      else{
         Lands4= JSON.parse(localStorage.getItem('Lands4'));
      }}else if(x==5){localStorage.setItem("Lands5", JSON.stringify(another_array));
      if(localStorage.getItem('Lands5')==null){
        Lands5=[];
      }
      else{
         Lands= JSON.parse(localStorage.getItem('Lands5'));
      }}else if(x==6){localStorage.setItem("Lands6", JSON.stringify(another_array));
      if(localStorage.getItem('Lands6')==null){
        Lands6=[];
      }
      else{
         Lands6= JSON.parse(localStorage.getItem('Lands6'));
      }}
      else if(x==7){
         localStorage.setItem("Lands7", JSON.stringify(another_array));
         if(localStorage.getItem('Lands7')==null){
           Lands7=[];
         }
         else{
            Lands7= JSON.parse(localStorage.getItem('Lands7'));
         }}
         else if(x==8){
         localStorage.setItem("Lands8", JSON.stringify(another_array));
         if(localStorage.getItem('Lands8')==null){
           Lands8=[];
         }
         else{
            Lands8= JSON.parse(localStorage.getItem('Lands8'));
         }}

         window.location.reload();
      }
     
       InputEdit=" ";
      
    };


   const DeleteIt = (e)=>{
      let id=e.currentTarget.value;
      
      let another_array=[], another_array2=[], another_array3=[], another_array4=[];
      let another_array5=[], another_array6=[], another_array7=[], another_array8=[];
    
      Lands.map((value, index)=>{

            another_array.push(value);
            another_array2.push(Lands2[index]);
            another_array3.push(Lands3[index]);
            another_array4.push(Lands4[index]);
            another_array5.push(Lands5[index]);
            another_array6.push(Lands6[index]);
            another_array7.push(Lands7[index]);
            another_array8.push(Lands8[index]);
         });

      another_array.splice(id, 1);
      another_array2.splice(id, 1);
      another_array3.splice(id, 1);
      another_array4.splice(id, 1);
      another_array5.splice(id, 1);
      another_array6.splice(id, 1);
      another_array7.splice(id, 1);
      another_array8.splice(id, 1);

      localStorage.setItem("Lands", JSON.stringify(another_array));
      localStorage.setItem("Lands2", JSON.stringify(another_array2));
      localStorage.setItem("Lands3", JSON.stringify(another_array3));
      localStorage.setItem("Lands4", JSON.stringify(another_array4));
      localStorage.setItem("Lands5", JSON.stringify(another_array5));
      localStorage.setItem("Lands6", JSON.stringify(another_array6));
      localStorage.setItem("Lands7", JSON.stringify(another_array7));
      localStorage.setItem("Lands8", JSON.stringify(another_array8));

       if(localStorage.getItem('Lands')==null){
          Lands=[];Lands2=[];Lands3=[];Lands4=[];Lands5=[];Lands6=[];Lands7=[];Lands8=[];
       }
       else{
          Lands= JSON.parse(localStorage.getItem('Lands'));
          Lands2= JSON.parse(localStorage.getItem('Lands2'));
          Lands3= JSON.parse(localStorage.getItem('Lands3'));
          Lands4= JSON.parse(localStorage.getItem('Lands4'));
          Lands5= JSON.parse(localStorage.getItem('Lands5'));
          Lands6= JSON.parse(localStorage.getItem('Lands6'));
          Lands7= JSON.parse(localStorage.getItem('Lands7'));
          Lands8= JSON.parse(localStorage.getItem('Lands8'));
       }

      window.location.reload();
    }

const[FORM, setfORM]=useState(" ");

const Hideform = ()=>{
    setfORM(" ");
}

const ShowForm = ()=>{
    setfORM(
        <div className="FORM">
          <div className ="center_div">
              <div className="detailconetnt"><a className="fillform">Please fill all details</a></div>
  
        <div className="detailconetnt">
          <div className="settocenter"><span className="detailsoptions">Enter Your Land Name: </span> 
              <input type ="text" placeholder ="Enter Your Land Name" 
              onChange ={ItemE} className="filltoption" /> 
           </div>
        </div>  

           <div className="detailconetnt">
            <spna className="detailsoptions">Enter Your Id: </spna>
              <input type ="text" placeholder ="Enter Your Id" 
              onChange ={ItemE2} className="filltoption" />
              </div>

                <div className="detailconetnt">
              <spna className="detailsoptions">Enter Your Name: </spna>
              <input type ="text" placeholder ="Enter Your Name" 
              onChange ={ItemE3} className="filltoption" />
              </div>
                
                <div className="detailconetnt">
              <spna className="detailsoptions">Enter Your Area: </spna>
              <input type ="number" placeholder ="Enter Your Area" 
              onChange ={ItemE4} className="filltoption" />
               </div>

                <div className="detailconetnt">
              <spna className="detailsoptions">Enter Your City: </spna>
              <input type ="text" placeholder ="Enter Your City" 
              onChange ={ItemE5} className="filltoption" />
                </div>

                <div className="detailconetnt">
              <spna className="detailsoptions">Enter Your State:  </spna>
              <input type ="text" placeholder ="Enter Your State" 
              onChange ={ItemE6} className="filltoption" />
                </div>
               
                <div className="detailconetnt">
              <spna className="detailsoptions">Enter Your Country: </spna>
              <input type ="text" placeholder ="Enter Your Country" 
              onChange ={ItemE7} className="filltoption" />
                 </div>

                 <div className="detailconetnt">
              <span className="detailsoptions">Enter Your Number: </span>
              <input type ="number" placeholder ="+91 1234567899" 
              onChange ={ItemE8} className="filltoption" />
                </div>

               <div className="detailconetnt">
              <Button onClick ={listingall} ><a className="Submit">Submit</a></Button>
              <Button onClick ={Hideform} ><a className="cancle">Cancle</a></Button>
              </div>

             </div>
            </div>);
}

//localStorage.clear();
 

  return(
  <>
    <div onClick={cancleWarning}>{warning}</div>
    <div >{FORM}</div>

<div className="mainContainer">
    <div className="Container">
        
        <div className="create">
        <Button onClick ={ShowForm} > <a className="createit">Create name of Land and it's details</a> </Button>
        </div>
       
         <div className="createditem">
           <div className="fixed1">{Lands.map( (itemvalue, index) =>{
              
        return(<>
       <div className="displaylandnamefixed">
        <div className="displaylandname">
   
        <a className="landinpittag1">Land name: </a>  <span contenteditable="true" onInput={EditthisItem} 
            className="landinpittag" id="1">{Lands[index]}</span>
         
          <div className="editupdate">
          <span className="landDtls"> 
                <Button value={index}  onClick ={Showdetails}><a className="Btn">Details</a></Button>
            </span>

            <span className="update"> 
                <Button value={index} onClick ={FINALDETAILS}><a className="Btn">Saved</a></Button>
            </span> 
            
            <span className="delete" > 
                <Button value={index} onClick ={DeleteIt}> <DeleteForeverIcon className="samedelete" /> </Button>
            </span> 
      
          </div>
        </div>
        </div>
        </>);
    })}</div>
           <div className="fixed2">{DETAILS}</div>
         </div> 
    </div>    
  </div>
  </>
    );
};

export default Add; 
