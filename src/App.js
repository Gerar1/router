import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import About  from "./pages/About";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Dashboard  from "./pages/Dashboard";
import Product  from "./pages/Product";
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import Example from './Header';
import Flex from './components/Flex';



function App() {

  const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

  
  return (
    <div>
	  <Example/>
	  <Flex/>
      <h1 className='t'>Menú.</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="products" element={<Product />} />
           <Route path="products/:prodcutId" element={<ProductDetails />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    


	
	
		<>
			
				<h2 className='i'>Tú escribe y yo memorizo</h2>
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			
		</>

    </div>
  );
}
	



export default App;
