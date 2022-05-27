import { Chart } from '@antv/g2';
import axios from 'axios';
import { useEffect } from 'react';

export default () => {

    useEffect(()=>{
        /** Get Chart Data */
    const getChartData = async () => {
       await axios.get('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
          .then(res => {
              let data = res.data;
              data = data.map(obj => {
                if(obj?.price >= 0 && obj?.price <=499){
                    obj['bucket'] = '0-499';
                }
                if(obj?.price >= 500 && obj?.price <=999){
                    obj['bucket'] = '500-999';
                }
                
                if(obj?.price >= 1000 && obj?.price <=1499){
                    obj['bucket'] = '1000-1499';
                    
                }
                if(obj?.price >= 1500 && obj?.price <=2000){
                    obj['bucket'] = '1500-2000';
                }
                return obj
              });
              const chart = new Chart({
                container: 'container',
                autoFit: true,
                height: 500,
                padding: [150, 20, 20, 20]
              });
              chart.data(data);
              chart.scale('price', {
                range: [0, 1]
              });
              chart.coordinate('polar');
              chart.legend(false);
              chart.axis('bucket', {
                grid: {
                  alignTick: false,
                  line: {
                    style: {
                      lineDash: [0, 0]
                    },
                  },
                },
              });
              chart
                .point()
                .adjust('jitter')
                .position('bucket*type')
                .color('price')
                .shape('circle')
                .style({
                  fillOpacity: 0.85,
                })
              chart.render();
          });
        }
        getChartData();
    }, []);


    return (
           <div className='page-wrapper'>
             <h1>Chart</h1>
             <div id="container"  ></div>
           </div>
    )
}

