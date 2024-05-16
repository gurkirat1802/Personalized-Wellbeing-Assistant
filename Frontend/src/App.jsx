import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import YogaPage from "./pages/YogaPage";
import Headstand from "./Yoga/Headstand";
import Shoulder from "./Yoga/Shoulder";
import Plough from "./Yoga/Plough";
import Fish from "./Yoga/Fish";
import Sitting from "./Yoga/Sitting";
import Cobra from "./Yoga/Cobra";
import Locust from "./Yoga/Locust";
import Bow from "./Yoga/Bow";
import Half from "./Yoga/Half";
import Crow from "./Yoga/Crow";
import Standing from "./Yoga/Standing";
import Triangle from "./Yoga/Triangle";
import WorkoutPage from "./pages/WorkoutPage";
import CaloriePage from "./pages/CaloriePage";
import ChartPage from "./pages/ChartPage";
import Potato from "./Calories/calPages/Potato";
import Vegetable from "./Calories/calPages/Vegetable";
import Mushroom from "./Calories/calPages/Mushroom";
import Salad from "./Calories/calPages/Salad";
import FruitFal from "./Calories/calPages/FruitFal";
import MilkProducts from "./Calories/calPages/MilkProducts";
import Yogurt from "./Calories/calPages/Yogurt";
import Cheese from "./Calories/calPages/Cheese";
import CreamCheese from "./Calories/calPages/CreamCheese";
import MeatProducts from "./Calories/calPages/MeatProducts";
import Pork from "./Calories/calPages/Pork";
import Chicken from "./Calories/calPages/Chicken";
import Beef from "./Calories/calPages/Beef";
import FishCal from "./Calories/calPages/FishCal";
import Ham from "./Calories/calPages/Ham";
import Flour from "./Calories/calPages/Flour";
import Rice from "./Calories/calPages/Rice";
import Pasta from "./Calories/calPages/Pasta";
import Bread from "./Calories/calPages/Bread";
import Meal from "./Calories/calPages/Meal";
import Burger from "./Calories/calPages/Burger";
import Pizza from "./Calories/calPages/Pizza";
import Beer from "./Calories/calPages/Beer";
import Coffee from "./Calories/calPages/Coffee";
import Wine from "./Calories/calPages/Wine";
import Liquor from "./Calories/calPages/Liquor";
import Juice from "./Calories/calPages/Juice";
import Chocolate from "./Calories/calPages/Chocolate";
import Cakes from "./Calories/calPages/Cakes";
import Pudding from "./Calories/calPages/Pudding";
import Seeds from "./Calories/calPages/Seeds";
import Oils from "./Calories/calPages/Oils";
import Login from "./forms/Login";
import SignUp from "./forms/SignUp";
import SignUpPage from "./pages/SignUpPage";
import LosePage from "./pages/LosePage";
import Fatloss from "./components/Fatloss";
import GainPage from "./pages/GainPage";
import MaintainPage from "./pages/MaintainPage";
import Record from "./pages/Record";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/YogaPage' element={<YogaPage />} />
          <Route path='/YogaPage/Yoga/Headstand' element={<Headstand />} />
          <Route path='/YogaPage/Yoga/Shoulder' element={<Shoulder />} />
          <Route path='/YogaPage/Yoga/Plough' element={<Plough />} />
          <Route path='/YogaPage/Yoga/Fish' element={<Fish />} />
          <Route path='/YogaPage/Yoga/Sitting' element={<Sitting />} />
          <Route path='/YogaPage/Yoga/Cobra' element={<Cobra />} />
          <Route path='/YogaPage/Yoga/Locust' element={<Locust />} />
          <Route path='/YogaPage/Yoga/Bow' element={<Bow />} />
          <Route path='/YogaPage/Yoga/Half' element={<Half />} />
          <Route path='/YogaPage/Yoga/Crow' element={<Crow />} />
          <Route path='/YogaPage/Yoga/Standing' element={<Standing />} />
          <Route path='/YogaPage/Yoga/Triangle' element={<Triangle />} />
          <Route path='/WorkoutPage' element={<WorkoutPage />} />
          <Route path='/CaloriePage' element={<CaloriePage />} />
          <Route path='/ChartPage' element={<ChartPage />} />
          <Route path='/Calories/calPages/Potato' element={<Potato />} />
          <Route path='/Calories/calPages/Vegetable' element={<Vegetable />} />
          <Route path='/Calories/calPages/Mushroom' element={<Mushroom />} />
          <Route path='/Calories/calPages/Salad' element={<Salad />} />
          <Route path='/Calories/calPages/FruitFal' element={<FruitFal />} />
          <Route path='/Calories/calPages/MilkProducts' element={<MilkProducts />} />
          <Route path='/Calories/calPages/Yogurt' element={<Yogurt />} />
          <Route path='/Calories/calPages/Cheese' element={<Cheese />} />
          <Route path='/Calories/calPages/CreamCheese' element={<CreamCheese />} />
          <Route path='/Calories/calPages/MeatProducts' element={<MeatProducts />} />
          <Route path='/Calories/calPages/FishCal' element={<FishCal />} />
          <Route path='/Calories/calPages/Ham' element={<Ham />} />
          <Route path='/Calories/calPages/Pork' element={<Pork />} />
          <Route path='/Calories/calPages/Chicken' element={<Chicken />} />
          <Route path='/Calories/calPages/Beef' element={<Beef />} />
          <Route path='/Calories/calPages/Flour' element={<Flour />} />
          <Route path='/Calories/calPages/Rice' element={<Rice />} />
          <Route path='/Calories/calPages/Pasta' element={<Pasta />} />
          <Route path='/Calories/calPages/Bread' element={<Bread />} />
          <Route path='/Calories/calPages/Meal' element={<Meal />} />
          <Route path='/Calories/calPages/Burger' element={<Burger />} />
          <Route path='/Calories/calPages/Pizza' element={<Pizza />} />
          <Route path='/Calories/calPages/Beer' element={<Beer />} />
          <Route path='/Calories/calPages/Coffee' element={<Coffee />} />
          <Route path='/Calories/calPages/Wine' element={<Wine />} />
          <Route path='/Calories/calPages/Liquor' element={<Liquor />} />
          <Route path='/Calories/calPages/Juice' element={<Juice />} />
          <Route path='/Calories/calPages/Chocolate' element={<Chocolate />} />
          <Route path='/Calories/calPages/Cakes' element={<Cakes />} />
          <Route path='/Calories/calPages/Pudding' element={<Pudding />} />
          <Route path='/Calories/calPages/Seeds' element={<Seeds />} />
          <Route path='/Calories/calPages/Oils' element={<Oils />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/forms/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/forms/SignUp' element={<SignUp />} />
          <Route path='/pages/SignUpPage' element={<SignUpPage />} />
          <Route path='/pages/LosePage' element={<LosePage />} />
          <Route path='/components/Fatloss' element={<Fatloss />} />
          <Route path='/pages/GainPage' element={<GainPage />} />
          <Route path='/pages/MaintainPage' element={<MaintainPage />} />
          <Route path='/pages/Record' element={<Record />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;