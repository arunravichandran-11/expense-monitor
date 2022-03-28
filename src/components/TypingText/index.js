
// import React from 'react';
// import './typing-text.scss';

// class TypingText extends React.Component {

//     state = {
//         text: '',
//     }

//     typeEffect = (element, speed) => {
//         var text = element.innerHTML;
//         element.innerHTML = "";
        
//         var i = 0;
//         var timer = setInterval(function() {
//         if (i < text.length) {
//           element.append(text.charAt(i));
//           i++;
//         } else {
//           clearInterval(timer);
//         }
//       }, speed);
//     }

//     render() {
//        var para="THis is the sample text", speed = 74;
       
//         var i = 0;
//         var timer = setInterval(function() {
//         if (i < text.length) {
//             this.setState({
//                 text: para.charAt(i)
//             });
//             i++;
//         } else {
//             clearInterval(timer);
//         }

//         return (
//             <div>
//                 <p>{this.state.text}</p>
//             </div>
//         )
//     }
// }

// export default TypingText;

// const typeEffect = (element, speed) => {
// 	var text = element.innerHTML;
// 	element.innerHTML = "";
	
// 	var i = 0;
// 	var timer = setInterval(function() {
//     if (i < text.length) {
//       element.append(text.charAt(i));
//       i++;
//     } else {
//       clearInterval(timer);
//     }
//   }, speed);
// }


// // application
// var speed = 75;
// var h1 = document.querySelector('h1');
// var p = document.querySelector('p');
// var delay = h1.innerHTML.length * speed + speed;

// // type affect to header
// typeEffect(h1, speed);


// export default function() {
//     return (
//         <div class="container">
//           <p class="slogan"><span>Hello world.</span></p>
//         </div>
//     )
// }