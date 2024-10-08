import React, {useState} from 'react'
import SectionWrap from './SectionWrap'
import { WORKOUTS } from '../utilities/swoldier'
import { SCHEMES } from '../utilities/swoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sml:text-4xl md:text-4xl lg:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-sm sm:text-base mx-auto'>{description}</p>
      </div>
  )
}

export default function Generator(props) {
  const [showModal, setShowModal] = useState(false)

  const{goal, setGoal, muscles, setMuscles, poison, setPoison, updateWorkout } = props
 
  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if(muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val=>val!==muscleGroup))
      return
    }
    
    // 
      if(muscles.length > 2) {
      return 
    }

      if (poison !== 'individual') {
        setMuscles([muscleGroup])
        // setShowModal(false) - this closes dropdown when muscles gorup are selected - dont like it
        return
      }
      setMuscles([...muscles, muscleGroup])
    }
  

  return (
    <SectionWrap header={"generate your workout"} title={['It\'s', 'Huge', 'O\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPoison(type)}}
              className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg '
            + (type === poison ? 'text-orange-600 border-blue-600':'border-blue-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
            )
          })}
      </div>


      {/* SECOND HEADER */}

      <Header index={'02'} title={'Lock On Targets'} description={'Select the muscles for annihilation'} />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col duration-200 hover:border-orange-600'>
        <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>
          <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join("   ")}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col p-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {updateMuscles(muscleGroup)}} className ={'duration-200 hover:text-blue-600 '
                  + (muscles.includes(muscleGroup) ? 'text-orange-600' : ' ')} key={muscleGroupIndex}>
                  <p className='capitalize'>{muscleGroup.replaceAll('_', " ")}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>


      {/* THIRD HEADER */}

      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective'} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {setGoal(scheme)}} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg '
              + (scheme === goal ? 'text-orange-600 border-blue-600':'border-blue-400')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
            )
          })}
      </div>
      <div><Button func={updateWorkout} text={"Formulate"} ></Button></div>



    </SectionWrap>
  )
}
