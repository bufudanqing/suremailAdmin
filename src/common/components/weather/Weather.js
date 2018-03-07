import React from 'react';
import { Card } from 'antd';

export default class Weather extends React.Component {
    render () {
        return (
           <Card>
               <div>
               <iframe title="weather" src="//www.seniverse.com/weather/weather.aspx?uid=UA357AF1DE&cid=CHBJ000000&l=zh-CHS&p=SMART&a=0&u=C&s=12&m=2&x=1&d=1&fc=&bgc=&bc=&ti=1&in=1&li=" frameBorder="0" scrolling="no" width="160" height="200" ></iframe>
               </div>
           </Card>
        )
    }
}