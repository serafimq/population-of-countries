import React from 'react'
import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Bar } from 'react-chartjs-2';
import 'antd/dist/antd.css'
import { Button } from 'antd';

const PopulationList: React.FC = () => {

  const {population, error, loading, region} = useTypedSelector(state => state.population)
  const {fetchPopulation, setPopulationRegion} = useActions()
  const regions = ['asia', 'africa', 'americas', 'europe', 'oceania']
  const countries = population.map(c => c.name)
  const populate = population.map(c => c.population)
  console.log(population);
  
  
  
  const data = {
    labels: countries,
    datasets: [
      {
        label: '# of Votes',
        data: populate,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
   
    fetchPopulation(region)
  }, [region])


  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
         <Bar type='bar' data={data} options={options} />
      
      <div 
      style={{display: 'flex', justifyContent: 'center'}}>
        {
          regions.map(reg => 
            <Button 
              key={reg}
              onClick={() => setPopulationRegion(reg)}
              type={ reg === region ? "primary"  : "dashed"  }
              >
                {reg}
            </Button>  
            
        )}
      </div>
    </div>
  )
}

export default PopulationList
