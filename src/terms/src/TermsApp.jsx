import Sidebar from './Sidebar'

import TermsAndConditions from './TermsAndCondtion'
import Cancel from './Cancel'
import ShippingPolicy from './ShippingPolicy'
import { useState } from 'react'
function AppTerms() {
  const [selected, setSelected] = useState('terms');

  const renderContent = () => {
    switch (selected) {
      case 'terms':
        return <TermsAndConditions />;
      case 'cancellation':
        return <Cancel />;
      case 'shipping':
        return <ShippingPolicy />;
      default:
        return <TermsAndConditions />;
    }
  };

  return (
    <div className="terms-container">
      <Sidebar onSelect={setSelected} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default AppTerms;
