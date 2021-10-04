import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Three_Mile', 'Row', 'Crunches', 'Movement_Contact', 'Maneuver_Fire', 'Ammo_Lift'],
    datasets: [
        {
            label: 'USMC pt Chart',
            backgroundColor: 'rgba(21,19,19)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 3,
            hoverBackgroundColor: 'rgba(21,19,19)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: ['100', '95', '90', '85', '100', '100']
        }
    ]
};

function Graph() {
    return (
        <div style={{ height: '500px', width: '800px' }}>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}
export default Graph;