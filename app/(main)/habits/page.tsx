import Button from '@/components/Button'
import DailiesForm from '@/components/dailies/DailiesForm'
import HabitsCard from '@/components/habits/HabitsCard'

const HabitsPage = () => (
  <div className='flex flex-col items-center'>
    <div>
      <h2 className='font-bold text-3xl my-6'>My habits</h2>
      <Button>Add Habit</Button>
    </div>
    <DailiesForm />
    <HabitsCard
      habit_title='Brain dump'
      habit_description='Brain dump all my ideas asap'
      streak={0}
      days_checkedin={0}
    />
  </div>
)

export default HabitsPage
