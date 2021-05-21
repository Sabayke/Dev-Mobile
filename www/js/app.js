function addTask() {
	//let taskList = document.getElementById('taskList')
	let listItem = document.createElement('li');
	listItem.appendChild(document.createTextNode(task.value));
	taskList.appendChild(listItem);

	$(listItem).on('swiperight', function() {
		//listItem.className += ' task-done';
		if (listItem.className.indexOf('task-done') == -1) {
			listItem.className += ' task-done';
		}else {
			listItem.className = listItem.className.replace(' task-done','');
		}
	});
	$(listItem).on('swipeleft', function () {
		/* methode 1 $(listItem).hide('slow', function () {
			listItem.remove();
		}); */
		// methode 2
		let deleteDirectly = false;
		if(listItem.className.indexOf('task-done') != -1) {
			deleteDirectly = true;
		}else {
			deleteDirectly = confirm("tache non terminee. Supprimer ?");
		}
		if (deleteDirectly) {
			$(listItem).hide('slow', function () {
				listItem.remove();
			})
		}
	});
		
	//taskList.innerHTML += '<li>' + task.value + '</li>';
	$(taskList).listview('refresh');
}