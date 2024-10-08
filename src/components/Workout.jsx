import React from 'react'
import SectionWrap from './SectionWrap'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout, id} = props
  
  return (
    <div  id={'exCard'}>
      <SectionWrap header={"Welcome to"} title={['The', 'Danger', 'zone']}>
        <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
            return (
              <ExerciseCard i={i} exercise={exercise} key={i} />
            )
          })}
        </div>
      </SectionWrap>
    </div>
  )
}
