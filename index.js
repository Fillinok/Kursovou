window.onload = function load() {
var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) 
    {
    var context = drawingCanvas.getContext('2d');
        
    function DrawArc(x2,y2)
    {
        context.fillStyle = "gray";
        context.beginPath();
        context.arc(x2+26, y2+26, 10, 0, Math.PI*2, true); 
        context.fill ();
    }
    for (var x = 0.5; x < 501; x += 50) {   
        context.strokeStyle = "#000";
        context.fillStyle = "#fc0";
        context.moveTo(x, 0);
        context.lineTo(x, 500);
        context.stroke();
        context.fill();
        }


    for (var y = 0.5; y < 501; y += 50) {
        context.strokeStyle = "#000";
        context.fillStyle = "#fc0";
        context.moveTo(0, y);
        context.lineTo(500, y);
        context.stroke();
        context.fill();
        } 
        var x2=1,y2=1;
        smile.onmousemove= function getCoord()
        {
            x2=event.clientX;
            y2=event.clientY;
            x2=x2-8;
            y2=y2-8; 
            if(x2%50 !=0)
            {
                x2=Math.ceil(x2/50);
                x2=(x2*50)-50; 
            }
            if(y2%50 !=0)
            {
                y2=Math.ceil(y2/50);
                y2=(y2*50)-50;  
            }
            
        }
          matrixArray();
        smile.onclick= function Draw()
        {
            kol2++;
            if(kol == 20)
            {
                alert("Победил за "+kol2+" ходов");kol++;
            }
        else(x2 < 500 || y2 < 500)
            {
                var x3=(x2+50)/50;
                var y3=(y2+50)/50;
                if(arr[x3][y3]==1)
                {
                    arr[x3][y3]=2;
                    kol++;
                    if(arr[x3-1][y3-1]==0 && arr[x3][y3-1]== 0 && arr[x3+1][y3-1]== 0 && arr[x3-1][y3]== 0 && arr[x3+1][y3] == 0 && arr[x3-1][y3+1] == 0 && arr[x3][y3+1] == 0 && arr[x3+1][y3+1] == 0)
                    {
                        
                    }
                    else
                    {
                        context.fillStyle = "rgb(120,230,0)"; 
                        context.fillRect (x2+1, y2+1, 49,49);
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
                        for(var f=0;f<3;f++)
                        {
                            for(var g=0;g<3;g++)
                            {
                                if(q == i && w == j)
                                {
                                    var i2=(i*50)-50;
                                    var j2=(j*50)-50;
                                    context.fillStyle = "rgb(255,0,0)"; 
                                    context.fillRect (i2+1,j2+1, 49,49);
                                }
                                else
                                {
                                    var i2=(q*50)-50;
                                    var j2=(w*50)-50;
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
                            for(var f=0;f<4;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j ))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<4;g++)
                                {
                                    if((q == i && w == j)||( q == i && w == j+1))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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
                            for(var f=0;f<5;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j )||(q == i+2 && w == j))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+2)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<5;g++)
                                {
                                    if((q == i && w == j)||(q == i && w == j+1 )||(q == i && w == j+2))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+2)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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
                            for(var f=0;f<6;f++)
                            {
                                for(var g=0;g<3;g++)
                                {
                                    if((q == i && w == j)||(q == i+1 && w == j )||(q == i+2 && w == j)||(q == i+3 && w == j))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+2)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        i2=((i+3)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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
                            for(var f=0;f<3;f++)
                            {
                                for(var g=0;g<6;g++)
                                {
                                    if((q == i && w == j)||(q == i && w == j+1 )||(q == i && w == j+2)||(q == i && w == j+3))
                                    {
                                        var i2=(i*50)-50;
                                        var j2=(j*50)-50;
                                        context.fillStyle = "rgb(255,0,0)"; 
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+1)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+2)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                        j2=((j+3)*50)-50;
                                        context.fillRect (i2+1,j2+1, 49,49);
                                    
                                    }
                                    else
                                    {
                                        var i2=(q*50)-50;
                                        var j2=(w*50)-50;
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

function matrixArray(){
    
    kol2=0;
    kol=0;
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