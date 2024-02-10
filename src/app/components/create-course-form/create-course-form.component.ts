import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ICourse,
  ICourseForm,
  ICourseLanguageSelection,
  ILanguage,
} from '../../shared/interface';
import { COURSE_LANGUAGE_SELECTIONS, LANGUAGE_CODES } from '../../constants';
import { TLanguage } from '../../shared/types';
import { CourseService } from '../../core/services/course/course.service';

@Component({
  selector: 'app-create-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss'],
})
export class CreateCourseFormComponent {
  languages: ILanguage[] = LANGUAGE_CODES;
  courseLanguageSelections: ICourseLanguageSelection[] =
    COURSE_LANGUAGE_SELECTIONS;
  selectedLanguagesIds: TLanguage[] = [];
  selectedLanguages: ILanguage[] = [];

  courseForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.fb.group({
      firstLanguage: ['', Validators.required],
      secondLanguage: ['', Validators.required],
      thirdLanguage: ['', Validators.required],
    });
  }

  onCourseLanguageSelection(event: Event): void {
    const courseLanguageSelectionId = (event.target as HTMLSelectElement).id;
    const selectedLanguageId = (event.target as HTMLSelectElement)
      .selectedOptions[0]?.id as TLanguage;

    const index = this.courseLanguageSelections.findIndex(
      (item) => item.id === courseLanguageSelectionId
    );
    index !== -1
      ? (this.selectedLanguagesIds[index] = selectedLanguageId)
      : this.selectedLanguagesIds.push(selectedLanguageId);
    const selectedLanguages = this.languages.find(
      (item) => item.id === selectedLanguageId
    )!;
    this.selectedLanguages[index] = selectedLanguages;
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const course: ICourseForm = this.courseForm.value;
    await this.courseService.addCourse(course);
    this.formSubmit.emit();
    this.courseForm.reset();
  }
}
