export interface IGenerateImageConfig {
  size: number;
  font_color: string;
  font_size: number;  //px
  font_family: string;
  font_leading: number;
  text_y: number;
  circles: number;
}
const defaultConfig: IGenerateImageConfig = {
  size: 250,
    font_color: 'white',
    font_size: 40,
    font_family: 'serif',
    font_leading: 10,
    text_y: 10,
    circles: 8,
}
export const generateImage = (text: string, color: string, _config: Partial<IGenerateImageConfig> = {}): string => {  
  text = text.trim();  
  color = color.toLocaleLowerCase().replace(/\s/g, ''); //lowercase, no spaces
  const config: IGenerateImageConfig = {
    ...defaultConfig,
    ..._config
  };
  
  //create canvas
  const canvas = document.createElement("canvas");
  canvas.style.visibility = "hidden";
  canvas.style.width = `${config.size}px`;
  canvas.style.height = `${config.size}px`;
  
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext("2d");
  
  if (ctx) {
    //background
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fill();

    //text
    ctx.font = `${config.font_size}px ${config.font_family}`;
    ctx.strokeStyle = config.font_color;
    ctx.textAlign = "center";
    ctx.strokeText(text, 
                Math.floor(config.size/2) + 10, 
                Math.floor(config.size/3)
                );

    for(let i=0; i<config.circles; i++) {
      const x = Math.floor(Math.random() * config.size);
      const y = Math.floor(Math.random() * config.size);
      const radius = Math.floor(Math.random() * config.size);
      
      ctx.beginPath();
      ctx.ellipse(x, y, radius, radius, 0, 0, 360);
      ctx.strokeStyle = 'rgba(255,255,255, 0.5)'
      ctx.stroke();
    }
  }
  
  
  const result = canvas.toDataURL('image/jpeg');  
  
  //delete canvas
  canvas.remove();
  
  //done
  return result;
}