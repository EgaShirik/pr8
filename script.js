document.body.style.margin = '0';
document.body.style.padding = '0';
const section = document.createElement('section');
const div1 = document.createElement('div');
const div_double = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div2.style.width = '400px';
div2.style.border = '2px solid black';     
div3.style.width = '400px';
div3.style.backgroundColor = '#8F75BE';
div3.style.border = '2px solid #8F75BE';
div2.style.height = '480px'
div3.style.height = '480px'
section.style.width = '1280px';
section.style.height = '883px';
div1.style.width = '464px';
div1.style.height = '84px';
div1.style.textAlign = 'center';
div1.style.marginLeft = '409px';
div_double.style.width = '800px';
div_double.style.height = '480px';
section.appendChild(div1);
section.appendChild(div_double);
div_double.appendChild(div2);                            //p h1 p button
div_double.appendChild(div3);
div_double.style.marginTop = '55px';
div_double.style.display = 'flex';
div_double.style.textAlign = 'center';
div_double.style.marginLeft = '240px';
const h1 = document.createElement('h1');
h1.innerText = 'Choose Your Option';
h1.style.lineHeight = '48px';
h1.style.fontSize = '36px';
h1.style.fontWeight = 'normal';
h1.style.fontStyle = 'normal';
div1.appendChild(h1);
document.body.appendChild(section);
document.body.style.display = 'grid';
document.body.style.justifyContent = 'center';
const p1 = document.createElement('p');
p1.innerText = 'But I must explain to you how all this mistaken idea of denouncing ';
p1.style.color = '#9FA3A7';
p1.style.opacity = '0.4';
p1.style.fontStyle = 'normal';
p1.style.fontWeight = 'normal';
p1.style.fontSize = '14px';
p1.style.lineHeight = '26px';

div1.appendChild(p1);


const p2 = document.createElement('p');
p2.innerText = 'FREELANCER';
p2.style.lineHeight = '15px';
p2.style.fontSize = '12px';
p2.style.fontWeight = 'bold';
p2.style.fontStyle = 'normal';
p2.style.letterSpacing = '2.4px';
p2.style.color = '#9FA3A7';
p2.style.marginTop = '82px'
div2.appendChild(p2);

const h2 = document.createElement('h1');
h2.innerText = 'Initially \n designed to ';
h2.style.lineHeight = '46px';
h2.style.fontSize = '36px';
h2.style.fontWeight = 'normal';
h2.style.fontStyle = 'normal';
div2.appendChild(h2);

const p3 = document.createElement('p');
p3.innerText = 'But I must explain to you how all this \n mistaken idea of denouncing ';
p3.style.lineHeight = '22px';
p3.style.fontSize = '12px';
p3.style.fontWeight = 'bold';
p3.style.fontStyle = 'normal';
p3.style.color = '#9FA3A7';
div2.appendChild(p3);

const button1 = document.createElement('button');
button1.innerHTML = 'START HERE';
button1.style.padding = '20px 31px 20px 31px';
button1.style.borderRadius = '100%';
button1.style.border = 'orange 2px solid';
button1.style.color = 'black';
button1.style.marginTop = '50px';
div2.appendChild(button1);



const p4 = document.createElement('p');
p4.innerText = 'STUDIO';
p4.style.lineHeight = '15px';
p4.style.fontSize = '12px';
p4.style.fontWeight = 'bold';
p4.style.fontStyle = 'normal';
p4.style.letterSpacing = '2.4px';
p4.style.color = '#FFC80A';
p4.style.marginTop = '82px'
div3.appendChild(p4);

const h3 = document.createElement('h1');
h3.innerText = 'Initially \n designed to ';
h3.style.lineHeight = '46px';
h3.style.fontSize = '36px';
h3.style.fontWeight = 'normal';
h3.style.fontStyle = 'normal';
h3.style.color = 'white';
div3.appendChild(h3);

const p5 = document.createElement('p');
p5.innerText = 'But I must explain to you how all this \n mistaken idea of denouncing ';
p5.style.lineHeight = '22px';
p5.style.fontSize = '12px';
p5.style.fontWeight = 'normal';
p5.style.fontStyle = 'normal';
p5.style.color = 'white';
div3.appendChild(p5);

const button2 = document.createElement('button');
button2.innerHTML = 'START HERE';
button2.style.padding = '20px 31px 20px 31px';
button2.style.borderRadius = '100%';
button2.style.border = 'orange 2px solid';
button2.style.color = 'white';
button2.style.marginTop = '50px';
button2.style.backgroundColor = '#8F75BE';
div3.appendChild(button2);