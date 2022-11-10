import { SinglyLinkedList } from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {
    it('Should create a LinkedList of 1 node', () => {
        const list = new SinglyLinkedList(1);

        expect(list.getSize()).toEqual(1);
    });

    it('Should add a new node to the end of the list', () => {
        const list = new SinglyLinkedList("Monday");
        list.append("Tuesday");
        list.append("Wednesday");

        const expectedTail = {
            value: "Wednesday",
            next: null
        }

        expect(list.getSize()).toEqual(3);
        expect(list.getTail()).toEqual(expectedTail);
    });

    it('Should add a new node to the beginning of the list', () => {
        const list = new SinglyLinkedList("First");
        list.append("Second");
        list.append("Third");
        list.append("Fourth");

        const currentHead = list.getHead();

        expect(list.getSize()).toEqual(4);
        expect(currentHead.value).toEqual("First");

        const expectedHead = {
            value: "Zero",
            next: currentHead
        }

        list.prepend("Zero");

        expect(list.getSize()).toEqual(5);
        expect(list.getHead()).toEqual(expectedHead);
    });

    it('Should insert a node in a specific index', () => {
        const list = new SinglyLinkedList("First");
        list.append("Second");
        list.append("Third");
        list.append("Fifth");

        expect(list.getSize()).toEqual(4);

        list.insert(3, "Fourth");

        const expectedNode = {
            value: "Fourth",
            next: {
                value: "Fifth",
                next: null
            }
        }

        expect(list.getSize()).toEqual(5);
        expect(list.getIndex(3)).toEqual(expectedNode);
    });

    it('Should remove a node from a specific index', () => {
        const list = new SinglyLinkedList("Monday");
        list.append("Tuesday"); // Selected Node (Index 1)
        list.append("Wednesday");

        expect(list.getSize()).toEqual(3);
        expect(list.getIndex(1).value).toEqual("Tuesday");

        list.remove(1);

        expect(list.getSize()).toEqual(2);
        expect(list.getIndex(1).value).toEqual("Wednesday");
    });

    it('Should return undefined when trying to remove a node with a non-existent index', () => {
        const list = new SinglyLinkedList("Monday");
        list.append("Tuesday");
        list.append("Wednesday");

        const result = list.remove(10);

        expect(result).toBeUndefined();
    });

    it('Should get a ListNode from a specific index', () => {
        const list = new SinglyLinkedList("First");
        list.append("Second");
        list.append("Third"); // Selected Node (Index 2)
        list.append("Fourth");

        const expectedNode = {
            value: "Third",
            next: {
                value: "Fourth",
                next: null
            }
        }

        expect(list.getIndex(2)).toEqual(expectedNode);
    });

    it('Should return the list size', () => {
        const list = new SinglyLinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        expect(list.getSize()).toEqual(5);
    });

    it('Should return the first node in the list', () => {
        const list = new SinglyLinkedList("The head");
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        expect(list.getHead().value).toEqual("The head");
    });

    it('Should return the last node in the list', () => {
        const list = new SinglyLinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append("The tail");

        expect(list.getTail().value).toEqual("The tail");
    });
})