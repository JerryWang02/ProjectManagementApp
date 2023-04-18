import { MemberTagsComponent } from "./member-tags.component";

describe('MemberTagsComponent', () => {
  
    it('should display the task name', () => {
        cy.mount(MemberTagsComponent, {
            componentProperties: {
                name: 'SWE Member',
              },
        });
      cy.get('.task-title').should('have.text', 'SWE Member');
    });

    it('should display the task name 2', () => {
        cy.mount(MemberTagsComponent, {
            componentProperties: {
                name: 'Task Runner',
              },
        });
      cy.get('.task-title').should('have.text', 'Task Runner');
    });
  });