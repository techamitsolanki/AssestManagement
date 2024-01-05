import { Route, Routes } from "react-router-dom";
import Home1 from "./Allcomponent/Home1";
import Menu from "./Allcomponent/Menu";
import Footer from "./Allcomponent/Footer";
import AboutUs from "./Allcomponent/AboutUs";
import Service from "./Allcomponent/Service";
import AssetAssignment from "./Forms/AssetAssignment";
import AssetCategoryTB from "./Forms/AssetCategoryTB";
import Assets from "./Forms/Assets";
import AssetStatusTB from "./Forms/AssetStatusTB";
import AssetTypeTB from "./Forms/AssetTypeTB";
import CountryTB from "./Forms/CountryTB";
import DepartmentTB from "./Forms/DepartmentTB";
import DisposalMethodTB from "./Forms/DisposalMethodTB";
import EmployeeTB from "./Forms/EmployeeTB";
import ITAssets from "./Forms/ITAssets";
import LocationTB from "./Forms/LocationTB";
import OpertaingSystemTB from "./Forms/OpertaingSystemTB";
import SoftwareInstalledTB from "./Forms/SoftwareInstalledTB";
import StateNameTB from "./Forms/StateNameTB";
import './App.css';

function App() {
  return (
    <div > 
        <Menu />
        <Routes>
          <Route path="/" element={<Home1 />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/assetassignment" element={<AssetAssignment />}></Route>
          <Route path="/assetcategory" element={<AssetCategoryTB />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
          <Route path="/assetstatustb" element={<AssetStatusTB />}></Route>
          <Route path="/assettypetb" element={<AssetTypeTB />}></Route>
          <Route path="/countrytb" element={<CountryTB />}></Route>
          <Route path="/depttb" element={<DepartmentTB />}></Route>
          <Route path="/disposalmethodtb" element={<DisposalMethodTB />}></Route>
          <Route path="/employeetb" element={<EmployeeTB />}></Route>
          <Route path="/itassets" element={<ITAssets />}></Route>
          <Route path="/locationtb" element={<LocationTB />}></Route>
          <Route path="/operatingsystemtb" element={<OpertaingSystemTB />}></Route>
          <Route path="/softwareinstalled" element={<SoftwareInstalledTB />}></Route>
          <Route path="/statenametb" element={<StateNameTB />}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
