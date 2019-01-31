const greet =  require('./greet');


test('Write a method greet(name)', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test('when name is null', () => {
    expect(greet(null)).toBe("Hello, my friend.");
})

test('When name is an array of two names', () => {
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test('When name represents more than two names', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})


test('when name is ["Amy", "BRIAN", "Charlotte"]', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})



