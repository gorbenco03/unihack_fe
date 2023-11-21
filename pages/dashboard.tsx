import { Sidebar } from '../components/sidebar/Sidebar.component';
import { Calendar2 } from '../components/calendar2/calendar2';
import { CardList } from '../components/cardList/CardList.component';
import { CardStats } from '../components/card/cardFooter.component';
export default function Dashboard() {
  return (
    <div>
      <Sidebar currentPage="dashboard">
        <div className="flex flex-col space-y-8">
          <CardStats />
          <CardList />
          <Calendar2 />
        </div>
      </Sidebar>
    </div>
  );
}
