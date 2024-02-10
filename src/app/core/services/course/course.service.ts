import {
  Firestore,
  doc,
  setDoc,
  collection,
  getDocs,
  collectionData,
} from '@angular/fire/firestore';
import { ICourse, ICourseForm } from '../../../shared/interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesSubject = new BehaviorSubject<ICourse[]>([]);
  courses$ = this.coursesSubject.asObservable();

  constructor(private firestore: Firestore) {}

  getCourses() {
    const courseRef = collection(this.firestore, 'courses');
    const courseData = collectionData(courseRef) as Observable<ICourse[]>;
    return courseData;
  }

  async addCourse(course: ICourseForm) {
    try {
      const { firstLanguage, secondLanguage, thirdLanguage } = course;
      const languages = [firstLanguage, secondLanguage, thirdLanguage].sort(
        (a, b) => a.id.localeCompare(b.id)
      );
      const courseId = languages.map((i) => i.id).join();
      const userId = 'test-uuid';
      const courseRef = doc(this.firestore, `courses/${courseId}`);
      const userRef = doc(
        this.firestore,
        `users/${userId}/courses/${courseId}`
      );
      await setDoc(courseRef, { id: courseId, languages });
      await setDoc(userRef, { ...course, id: courseId });
      console.log('Course added successfully.');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  }
}
