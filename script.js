'use strict'

const toDoList = {
	list: [],
	// Создаём метод, который создаёт таски
	// передаём загаловок и текст
	// в методе создаём переменную объект в которую
	// передаются парамтеры метода
	// возвращаем в пустой массив новые объекты
	createTask(title,text){
		// Проверяем если название задачи уже есть, то возвращаем true
		// Дальше выводим сообщение и возвращаем null
		if (this.list.some((list) => list.title === title)) {
			console.log(`Задача с заголовком "${title}" уже существует.`);
			return null
		}

		const newTask = {
			id: Math.random().toString(10).slice(2, 9),
			title,
			text,
			status: false,
		};
		// Пушим в массив таску
		this.list.push(newTask)
		// Возвращаем таску
		return newTask
	},
	// Метод удаление таски через загаловок
	// переприсваиваем массив с объектами
	// где до момента переприсваивания отфильтровываем и
	// создаём новый массив с объектами кроме объекта,
	// который не равен остальным заголовкам массива
	deleteTaskById(id) {
		const findId = this.list.findIndex((list) => list.id === id)

		// Если длинная найденное задание отсутствует
		// то по условию будет true вернёт 
		// сообщение и false
		if (findId === -1 ) {
			console.log(`Задача с заголовком "${title}" не найдена.`);
			return false
		}

		// Удаляем через метод splice обнаруженную задачу с объектом
		this.list.splice(findId,1);
		console.log(`Задача с заголовком "${title}" удалена.`);
		return true
	},
	
	// Два метода на добавление выполненого или не выполненого задания
	getReadyTask(title) {
		const task = this.list.find(list => list.title === title);
		// Если таски нет, то вернёт сообщение и false
		if(!task){
			console.log(`Задача с заголовком "${title}" не найдена.`);
			return false
		}
		// переназначаем перемунную на true, выносим
		// сообщение и возвращаем true
		task.status = true;
		console.log(`✅ Задача "${title}" отмечена как выполненная.`);
		return true
	},
	getDeleteTask(title) {
		const task = this.list.find(list => list.title === id);
		if(!task){
			console.log(`Задача с заголовком "${title}" не найдена.`);
			return false
		}
		// Всё то же самое, но переназначение на false
		task.status = false;
		console.log(`❌ Задача "${title}" теперь не отмечена как выполненная.`);
		return true
	},
	// Метод для изменения текущих записей
	getChangeTask(title,newTitle,newText) {
		// присваиваем новой пеерменной найденный объект
		const task = this.list.find(list => list.title === title)
		// если не найден, то false
		if (!task) {
			console.log(`Задача с заголовком "${title}" не найдена.`);
			return false
		}
		// переприсваиваем найденному объекту новый заголовок и текст
		if (newTitle !== undefined) {
			task.title = newTitle;
		}
		if (newText !== undefined) {
			task.text = newText;
		}

		console.log(`Текст задачи "${title}" изменён.`);
		return true
	},
	// Показать список
	getTasks() {
		// Вернёт развёрнутый список где
		return this.list.map(list => {
			// переменная в которой проверяем, если list.status имеет false, вернёт
			// '❌ Не сделано', если true '✅ Сделано'
			const status = list.status ? '✅ Сделано' : '❌ Не сделано';
			// вернёт сообщение с таской: текст к таске - статус таски
			return `📌 ID:${list.id}. ${list.title}: ${list.text} - ${status}`;
		})
	},
	// Удалить список 
	clearTasks() {
		this.list = [];
		console.log("Все задачи удалены.");
	}
}

toDoList.createTask('Сделать зарядку', '15 минут кардио + растяжка');
toDoList.createTask('Написать код', 'Реализовать метод удаления в тудулисте');
toDoList.createTask('Посмотреть урок по JS', 'Разобрать методы массивов');
toDoList.createTask('Позвонить другу', 'Обсудить встречу на выходных');
toDoList.createTask('Прочитать книгу', 'Прочитать хотя бы 20 страниц');
toDoList.createTask('Сделать уборку', 'Пропылесосить, помыть полы, вытереть пыль');
toDoList.createTask('Приготовить обед', 'Сварить суп, сделать салат');
toDoList.createTask('Разобрать почту', 'Проверить входящие и удалить ненужные письма');
toDoList.createTask('Прогуляться', 'Минимум 30 минут на свежем воздухе');
toDoList.createTask('Пойти на работу', 'Отпахать 12 часов')
toDoList.getReadyTask('Пойти на работу')


console.log(toDoList.getTasks());


