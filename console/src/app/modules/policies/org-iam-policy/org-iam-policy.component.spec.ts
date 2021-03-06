import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgIamPolicyComponent } from './org-iam-policy.component';

describe('OrgIamPolicyComponent', () => {
    let component: OrgIamPolicyComponent;
    let fixture: ComponentFixture<OrgIamPolicyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrgIamPolicyComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrgIamPolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
