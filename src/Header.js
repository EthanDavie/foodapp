import './App.css';

function Header(){
    return (
      <ul>
      <li class="text-blue-500 hover:text-blue-700 cursor-pointer">Find a Meal</li>
      <li class="text-blue-500 hover:text-blue-700 cursor-pointer">Add a Meal</li>
      <li class="text-blue-500 hover:text-blue-700 cursor-pointer">All Meals</li>
      <li class="text-blue-500 hover:text-blue-700 cursor-pointer">All Ingredients</li>
    </ul>
      );
}

export default Header;