import { createStackNavigator, createAppContainer } from "react-navigation";
import BCpapers from "./Semester1/BCPapers";
import FWTpapers from "./Semester1/FWTpapers";
import OSpapers from "./Semester1/OSpapers";
import LDpapers from "./Semester1/LDpapers";
import Stats1papers from "./Semester1/Stats1papers";
import CFpapers from "./Semester1/CFpapers";
import WCMSpapers from "./Semester1/WCMSpapers";
import BSpapers from "./Semester1/BSpapers";
import FrenchPapers from "./Semester2/FrenchPapers";
import GermanPapers from "./Semester2/GermanPapers";
import CSWTpapers from "./Semester2/CSWTpapers";
import PythonPapers from "./Semester2/PythonPapers";
import DBMSpapers from "./Semester2/DBMSpapers";
import Stats2papers from "./Semester2/Stats2papers";
import EcoPapers from "./Semester2/EcoPapers";
import NEpapers from "./Semester2/NEpapers";
import AccountsPapers from "./Semester2/AccountsPapers";
import OBpapers from "./Semester2/OBpapers";
import OTITpapers from "./Semester3/OTITpapers";
import BankingPapers from "./Semester3/BankingPapers";
import HRMpapers from "./Semester3/HRMpapers";
import SEPpapers from "./Semester3/SEPpapers";
import ITBPpapers from "./Semester3/ITBPpapers";
import MarketingPapers from "./Semester4/MarketingPapers";
import SSWTpapers from "./Semester4/SSWTpapers";
import OOPpapers from "./Semester4/OOPpapers";
import RMpapers from "./Semester4/RMpapers.js";
import EBpapers from "./Semester5/EBpapers";
import EntrePapers from "./Semester5/EntrePapers";
import SMpapers from "./Semester5/SMpapers";
import ITTBpapers from "./Semester5/ITTBpapers";
import ITBVpapers from "./Semester5/ITBVpapers";
import ITRCpapers from "./Semester5/ITRCpapers";
import VVTpapers from "./Semester5/VVTpapers";
import AFMpapers from "./Semester5/AFMpapers";
import RetailMpapers from "./Semester6/RetailMpapers";
import DMpapers from "./Semester6/DMpapers";
import SCMpapers from "./Semester6/SCMpapers";
import ECRMpapers from "./Semester6/ECRMpapers";
import BMBPpapers from "./Semester6/BMBPpapers";
import FQMpapers from "./Semester6/FQMpapers";
import SPPpapers from "./Semester6/SPPpapers";
import Semester from "./Semester";
import Main from "./authentication/Main";
import Landing from "./authentication/Landing";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import Other from "./authentication/Other";


const RootStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerleft: null,
      header: null
    })
  },
  Landing: { screen: Landing },
  SignUp: { screen: SignUp },
  Other: { screen: Other },
  Login: { screen: Login },
  Semester: { screen: Semester },
  BCpapers: { screen: BCpapers },
  FWTpapers: { screen: FWTpapers },
  OSpapers: { screen: OSpapers },
  LDpapers: { screen: LDpapers },
  Stats1papers: { screen: Stats1papers },
  CFpapers: { screen: CFpapers },
  WCMSpapers: { screen: WCMSpapers },
  BSpapers: { screen: BSpapers },
  FrenchPapers: { screen: FrenchPapers },
  GermanPapers: { screen: GermanPapers },
  CSWTpapers: { screen: CSWTpapers },
  PythonPapers: { screen: PythonPapers },
  DBMSpapers: { screen: DBMSpapers },
  Stats2papers: { screen: Stats2papers },
  EcoPapers: { screen: EcoPapers },
  NEpapers: { screen: NEpapers },
  AccountsPapers: { screen: AccountsPapers },
  OBpapers: { screen: OBpapers },
  OTITpapers: { screen: OTITpapers },
  BankingPapers: { screen: BankingPapers },
  HRMpapers: { screen: HRMpapers },
  SEPpapers: { screen: SEPpapers },
  ITBPpapers: { screen: ITBPpapers },
  MarketingPapers: { screen: MarketingPapers },
  SSWTpapers: { screen: SSWTpapers },
  OOPpapers: { screen: OOPpapers },
  RMpapers: { screen: RMpapers },
  EBpapers: { screen: EBpapers },
  EntrePapers: { screen: EntrePapers },
  SMpapers: { screen: SMpapers },
  ITBVpapers: { screen: ITBVpapers },
  ITTBpapers: { screen: ITTBpapers },
  ITRCpapers: { screen: ITRCpapers },
  VVTpapers: { screen: VVTpapers },
  AFMpapers: { screen: AFMpapers },
  RetailMpapers: { screen: RetailMpapers },
  DMpapers: { screen: DMpapers },
  SCMpapers: { screen: SCMpapers },
  ECRMpapers: { screen: ECRMpapers },
  BMBPpapers: { screen: BMBPpapers },
  FQMpapers: { screen: FQMpapers },
  SPPpapers: { screen: SPPpapers }
});

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
