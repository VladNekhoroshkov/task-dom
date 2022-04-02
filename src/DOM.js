/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const tagElement = document.createElement(tag);
        const tagContent = document.createTextNode(content);
        tagElement.appendChild(tagContent);
        document.body.append(tagElement);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function generateBranch(count, lvl) {
        let tree = document.createElement('div');
        tree.classList = `item_${lvl}`;
        if (lvl < level) {
            for (let i = 0; i < count; i++) {
                tree.appendChild(generateBranch(childrenCount, lvl + 1));
            }
        }

        return tree;
    }

    return generateBranch(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    function generateBranch(count, lvl) {
        let tree = document.createElement('div');
        tree.classList = `item_${lvl}`;
        if (lvl < 3) {
            for (let i = 0; i < count; i++) {
                tree.appendChild(generateBranch(2, lvl + 1));
            }
        }

        return tree;
    }

    let tree = generateBranch(2, 1);

    tree.childNodes.forEach((element) => {
        if (element.className == 'item_2') {
            let section = document.createElement('SECTION');
            section.classList.add('item_2');
            section.innerHTML = element.innerHTML;
            element.replaceWith(section);
        }
    });
    return tree;
}
