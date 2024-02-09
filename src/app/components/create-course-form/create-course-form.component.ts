import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ICourseLanguageSelection,
  ILanguageCode,
} from '../../../../shared/interface';
import { COURSE_LANGUAGE_SELECTIONS, LANGUAGE_CODES } from '../../constants';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-course-form.component.html',
  styleUrl: './create-course-form.component.scss',
})
export class CreateCourseFormComponent {
  languages: ILanguageCode[] = LANGUAGE_CODES;
  courseLanguageSelections: ICourseLanguageSelection[] =
    COURSE_LANGUAGE_SELECTIONS;
  selectedLanguages: string[] = [];
  courseTitleText: string[] = this.courseLanguageSelections.map((i) => i.title);

  courseForm!: FormGroup;
  fb = inject(FormBuilder);
  @Output() formSubmit = new EventEmitter<void>();

  constructor() {
    this.courseForm = this.fb.group({
      nativeLanguage: ['', Validators.required],
      secondLanguage: ['', Validators.required],
      thirdLanguage: ['', Validators.required],
      isPrivate: [false],
    });
  }

  onCourseLanguageSelection(event: Event): void {
    const courseLanguageSelectionId = (event.target as HTMLSelectElement).id;
    const selectedLanguageId = (event.target as HTMLSelectElement)
      .selectedOptions[0]?.id;

    const index = this.courseLanguageSelections.findIndex(
      (item) => item.id === courseLanguageSelectionId
    );
    index !== -1
      ? (this.selectedLanguages[index] = selectedLanguageId)
      : this.selectedLanguages.push(selectedLanguageId);
    const language = this.languages.find(
      (item) => item.id === selectedLanguageId
    )!;
    this.courseTitleText[index] = language.title;
  }

  togglePrivacy(event: Event): void {
    const isPrivate = (event.target as HTMLInputElement).checked;
    this.courseForm.patchValue({ isPrivate });
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Submitting TODO:');
    console.log(this.courseForm);
  }
}
