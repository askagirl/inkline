import { $form } from '@inkline/inkline/src/prototypes/form';

describe('Prototypes', () => {
    describe('$form()', () => {
        beforeEach(() => {
            $form.builder.factory = jest.fn()
                .mockReturnValue({});
        });

        it('should be callable only with schema', () => {
            const form = $form({});

            expect(form).toBeDefined();
        });

        it('should be callable with name and schema', () => {
            const form = $form('name', {});

            expect(form).toBeDefined();
        });

        it('should call form builder factory() method', () => {
            const spy = jest.spyOn($form.builder, 'factory');

            $form({});

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith([], {}, true);
        });

        it('should call form builder factory() method with name nesting', () => {
            const spy = jest.spyOn($form.builder, 'factory');

            $form('a.b.c', {});

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(['a', 'b', 'c'], {}, true);
        });
    });
});
