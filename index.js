window.onload=function load() {
var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) 
    {
    var context = drawingCanvas.getContext('2d');
    var img = document.getElementById("photo");
    var img2 = document.getElementById("hit");
    var img3 = document.getElementById("dot");
    context.drawImage(img,6,7);
    kol=0;
    kol2=0;
    StartStop();
    matrixArray();
    //again.onclick= function play()
    //{
    //    window.location.reload();
    //}
    function DrawArc(x2,y2)
    {
        if(x2>10 && x2<360 && y2>10 && y2<360)
        context.drawImage(img3,x2+3,y2+2);
    } 
        smile.onmousemove= function getCoord()
        {
            x2=event.clientX;
            y2=event.clientY;
            x2=x2-8;
            y2=y2-8; 
            if(x2%33 !=0)
            {
                x2=Math.ceil(x2/33);
                x2=(x2*33)-33; 
            }
            if(y2%33 !=0)
            {
                y2=Math.ceil(y2/33);
                y2=(y2*33)-33;  
            }
            
        }
        smile.onclick= function Draw()
        {
            kolship1=0;
            kolship2=0;
            kolship3=0;
            kolship4=0;
            kol2++;
            if(kol == 20)
            {
                StartStop();
                //var str1="Количество ходов: ";
                //var str2="Время: ";
                alert("Количество ходов: "+kol2+" Время: "+readout);kol++;
                
            }
        else(x2 < 500 || y2 < 500)
            {
                var x3=(x2+33)/33;
                var y3=(y2+33)/33;
                if(arr[x3][y3]==1)
                {
                    arr[x3][y3]=2;
                    kol++;
                    if(arr[x3-1][y3-1]==0 && arr[x3][y3-1]== 0 && arr[x3+1][y3-1]== 0 && arr[x3-1][y3]== 0 && arr[x3+1][y3] == 0 && arr[x3-1][y3+1] == 0 && arr[x3][y3+1] == 0 && arr[x3+1][y3+1] == 0)
                    {
                        
                    }
                    else
                    {
                        context.drawImage(img2,x2+3,y2+2);
                    }
                }
                if(arr[x3][y3] == 0) 
                {
                    DrawArc(x2,y2);
                }   
            }
            for(var i=1;i<11;i++)
            {
                for(var j=1;j<11;j++)
                {
                    
                    if(arr[i][j]==2 && arr[i+1][j] == 0 && arr[i-1][j] == 0 && arr[i][j+1] == 0 && arr[i][j-1] == 0)
                    {
                        var q=i-1;
                        var w=j-1;
                        kolship1++;
                        for(var f=0;f<3;f++)
                        {
                            for(var g=0;g<3;g++)
                            {
                                if(q == i && w == j)
                                {
                                    var i2=(i*33)-33;
                                    var j2=(j*33)-33;
                                    context.fillStyle = "rgb(255,0,0)"; 
                                    context.fillRect (i2+2,j2+2, 31,31);
                                }
                                else
                                {
                                    var i2=(q*33)-33;
                                    var j2=(w*33)-33;
                                    DrawArc(i2,j2);
                                }
                                w++;
                            }
                            w=w-3;
                            q++;
                        }    
                    }

                    //horizontal 2-palub
                    //begin
                    if(arr[i][j]==2 && arr[i][j+1] == 0 && arr[i][j-1] == 0)
                    {
                        if(arr[i+1][j] == 2 && arr[i-1][j] == 0 && arr[i+2][j] !=1 && arr[i+2][j]!=2 )
                        {   
                            var q=i-1;
                            var w=j-1
                            kolship2++;
                            for(var f=0;f<4;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j ))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2); 
                                    }
                                    w++;
                                }
                                w=w-3;
                                q++;
                            }
                        }
                    }
                    //end
                    //vertikal 2-palub
                    //begin
                    if(arr[i][j]==2 && arr[i+1][j] == 0 && arr[i-1][j] == 0)
                    {
                        if(arr[i][j+1] == 2 && arr[i][j-1] == 0 && arr[i][j+2] !=1 && arr[i][j+2]!=2)
                        {
                            var q=i-1;
                            var w=j-1
                            kolship2++;
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<4;g++)
                                {
                                    if((q == i && w == j)||( q == i && w == j+1))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2);  
                                    }
                                    w++;
                                }
                                w=w-4;
                                q++;
                            }
                        }                        
                    }
                   //end 2-palub
                   //begin 3-palub
                   if(arr[i][j]==2 && arr[i][j+1] == 0 && arr[i][j-1] == 0)
                    {
                        if(arr[i+1][j] == 2 && arr[i-1][j] == 0 && arr[i+2][j] == 2 && arr[i+3][j]!=2 && arr[i+3][j] !=1 )
                        {   
                            var q=i-1;
                            var w=j-1;
                            kolship3++;
                            for(var f=0;f<5;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j )||(q == i+2 && w == j))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+2)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2); 
                                    }
                                    w++;
                                }
                                w=w-3;
                                q++;
                            }
                        }
                    }
                if(arr[i][j]==2 && arr[i+1][j] == 0 && arr[i-1][j] == 0)
                    {
                        if(arr[i][j+1] == 2 && arr[i][j-1] == 0 && arr[i][j+2] == 2 && arr[i][j+3]!=2 && arr[i][j+3] !=1 )
                        {   
                            var q=i-1;
                            var w=j-1;
                            kolship3++;
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<5;g++)
                                {
                                    if((q == i && w == j)||(q == i && w == j+1 )||(q == i && w == j+2))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+2)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2); 
                                    }
                                    w++;
                                }
                                w=w-5;
                                q++;
                            }
                        }
                    }
                if(arr[i][j]==2 && arr[i][j+1] == 0 && arr[i][j-1] == 0)
                    {
                        if(arr[i+1][j] == 2 && arr[i-1][j] == 0 && arr[i+2][j] == 2 && arr[i+3][j] ==2 && arr[i+4][j] !=1 && arr[i+4][4] !=4 )
                        {   
                            var q=i-1;
                            var w=j-1;
                            kolship4++;
                            for(var f=0;f<6;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j )||(q == i+2 && w == j)||(q == i+3 && w == j))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+2)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        i2=((i+3)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2); 
                                    }
                                    w++;
                                }
                                w=w-3;
                                q++;
                            }
                        }
                    }
                if(arr[i][j]==2 && arr[i+1][j] == 0 && arr[i-1][j] == 0)
                    {
                        if(arr[i][j+1] == 2 && arr[i][j-1] == 0 && arr[i][j+2] == 2 && arr[i][j+3] == 2 && arr[i][j+4] !=1 && arr[i][j+4] !=2 )
                        {   
                            var q=i-1;
                            var w=j-1;
                            kolship4++;
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<6;g++)
                                {
                                    if((q == i && w == j)||(q == i && w == j+1 )||(q == i && w == j+2)||(q == i && w == j+3))
                                    {
                                        var i2=(i*33)-33;
                                        var j2=(j*33)-33;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+1)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+2)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                        j2=((j+3)*33)-33;
                                        context.fillRect (i2+2,j2+2, 31,31);
                                    
                                    }
                                    else
                                    {
                                        var i2=(q*33)-33;
                                        var j2=(w*33)-33;
                                        DrawArc(i2,j2); 
                                    }
                                    w++;
                                }
                                w=w-6;
                                q++;
                            }
                        }
                    }
                }
            }
            for(var t=0;t<5;t++)
            {
                if(kolship4 == t)
                document.getElementById('p_four').innerHTML ="x"+(1-t);
                if(kolship3 == t)
                document.getElementById('p_three').innerHTML ="x"+(2-t);
                if(kolship2 == t)
                document.getElementById('p_two').innerHTML ="x"+(3-t);
                if(kolship1 == t)
                document.getElementById('p_one').innerHTML ="x"+(4-t);
            }         

        }
        smile.oncontextmenu=function Draw()
        {
            if(x2 > 500 || y2 > 500)
            {
                document.oncontextmenu = function (){return false};
            } 
        }
    }
}






                                                                            // РАНДОМНАЯ РАССТАНОВКА КОРАБЛЕЙ
function matrixArray(){
    arr = new Array();
    for(var i=1; i<13; i++){
        arr[i] = new Array();
        for(var j=1; j<13; j++){
            arr[i][j] = 0;
      }
    }
    for(var ch=0;ch<1;ch++)
    {
        var k4=Math.ceil(Math.random()*2);
        if(k4 == 1)
        {
            var i=Math.ceil(Math.random()*6)+1;
            var j=Math.ceil(Math.random()*9)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                arr[i][j] = 1;
                arr[i+1][j] = 1;
                arr[i+2][j] = 1;
                arr[i+3][j] = 1;   
            }
            else
            {
                ch--;
            } 
        }
        if(k4 == 2)
        {
            var i=Math.ceil(Math.random()*9)+1;
            var j=Math.ceil(Math.random()*6)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                arr[i][j] = 1;
                arr[i][j+1] = 1;
                arr[i][j+2] = 1;
                arr[i][j+3] = 1;   
            }
            else
            {
                ch--;
            } 
        }
    }
    for(var tr=0;tr<2;tr++)
    {
        var k3=Math.ceil(Math.random()*2);
        if(k3 == 1)
        {
            var i=Math.ceil(Math.random()*7)+1;
            var j=Math.ceil(Math.random()*9)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                if(arr[i+2][j-1] == 0 && arr[i+2][j] == 0 && arr[i+2][j+1] == 0 && arr[i+3][j-1] == 0 && arr[i+3][j] == 0 && arr[i+3][j+1] == 0)
                {
                    arr[i][j] = 1;
                    arr[i+1][j] = 1;
                    arr[i+2][j] = 1;  
                }
                else{tr--;}
                  
            }
            else{tr--;}
        }
        if(k3 == 2)
        {
            var i=Math.ceil(Math.random()*9)+1;
            var j=Math.ceil(Math.random()*7)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                if(arr[i-1][j+2] == 0 && arr[i][j+2] == 0 && arr[i+1][j+2] == 0 && arr[i-1][j+3] == 0 && arr[i][j+3] == 0 && arr[i+1][j+3] == 0)
                {
                    arr[i][j] = 1;
                    arr[i][j+1] = 1;
                    arr[i][j+2] = 1;   
                }
                else{tr--;} 
            }
            else{tr--;}
        }
    }
    for(var dv=0;dv<3;dv++)
    {   
        
        var k2 = Math.ceil(Math.random()*2);
        if(k2 == 2)
        {
            var i=Math.ceil(Math.random()*9)+1;
            var j=Math.ceil(Math.random()*8)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                if(arr[i-1][j+2] == 0 && arr[i][j+2] == 0 && arr[i+1][j+2] == 0)
                {
                    arr[i][j] = 1;
                    arr[i][j+1] = 1;
                }
                else{dv--;}              
            }
            else{dv--;}     
        }
        if(k2 == 1)
        {
            var i=Math.ceil(Math.random()*8)+1;
            var j=Math.ceil(Math.random()*9)+1;
            if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
            {
                if(arr[i+2][j-1] == 0 && arr[i+2][j] == 0 && arr[i+2][j+1] == 0)
                {
                    arr[i][j] = 1;
                    arr[i+1][j] = 1;  
                }
                else{dv--;}                 
            }
            else{dv--;}
        }
        
    }
    for(var odn=0;odn<4;odn++)
    {
        var i=Math.ceil(Math.random()*9)+1;
        var j=Math.ceil(Math.random()*9)+1; 
        if(arr[i][j] == 0 && arr[i-1][j-1]==0 && arr[i][j-1]== 0 && arr[i+1][j-1]== 0 && arr[i-1][j]== 0 && arr[i+1][j] == 0 && arr[i-1][j+1] == 0 && arr[i][j+1] == 0 && arr[i+1][j+1] == 0)
        {
            arr[i][j] = 1;    
        }
        else
        {
            odn--;
        } 
    }  
      
  }
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
                    
//функция для очистки поля
function ClearСlock() { 
clearTimeout(clocktimer); 
h=1;m=1;tm=1;s=0;ts=0;ms=0; 
init=0;
readout='00:00:00.00'; 
document.getElementById('stopwatch').innerHTML = readout; 
} 


function StartTIME() { 
    var cdateObj = new Date(); 
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
    if (t>999) 
        s++;  
    if (s>=(m*base)) 
    { 
        ts=0; 
        m++; 
    } 
    else 
    { 
        ts=parseInt((ms/100)+s); 
        if(ts>=base) { ts=ts-((m-1)*base); } 
    } 
    if (m>(h*base)) 
    { 
        tm=1; 
        h++; 
    } 
    else 
    { 
        tm=parseInt((ms/100)+m); 
        if(tm>=base) 
        { 
            tm=tm-((h-1)*base); 
        } 
    } 
    ms = Math.round(t/10); 
    if (ms>99) 
    ms=0; 
    if (ms==0) 
    ms='00'; 
    if (ms>0&&ms<=9) 
    ms = '0'+ms;  
    if (ts>0) 
    { 
        ds = ts; 
        if (ts<10) 
            ds = '0'+ts;     
    } 
    else 
    ds = '00';  
    dm=tm-1; 
    if (dm>0) 
    { 
        if (dm<10)  
            dm = '0'+dm;
    } 
    else 
    dm = '00'; 
    dh=h-1; 
    if (dh>0) 
    { 
        if (dh<10)  
            dh = '0'+dh; 
    }
     else  
    dh = '00'; 
    readout = dh + ':' + dm + ':' + ds + '.' + ms; 
    document.getElementById('stopwatch').innerHTML = readout; 
    clocktimer = setTimeout("StartTIME()",1); 
} 
function StartStop() 
{ 
    if (init==0)
    { 
		ClearСlock();
		dateObj = new Date(); 
		StartTIME(); 
		init=1; 
    } 
    else 
    { 
		clearTimeout(clocktimer);
		init=0;
	} 
} 