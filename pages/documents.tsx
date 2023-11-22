import { Card } from '../components/doctorCard/card';
import Dropdown from '../components/dropdown/dropdown.component';
import { Sidebar } from '../components/sidebar/Sidebar.component';

export default function Documents() {
  return (
    <div>
      <Sidebar currentPage="documents">
        <Card people={[]}></Card>
      </Sidebar>
    </div>
  );
}
