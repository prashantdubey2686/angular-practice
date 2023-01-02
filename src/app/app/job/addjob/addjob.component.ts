import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { JobService } from '../../services/job/job.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.scss'],
})
export class AddjobComponent implements OnInit {
  addjobForm: FormGroup | undefined;
  id: any;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    let job: any;
    if (this.id) {
      job = this.jobService.getJobByIndex(this.id as number);
    }
    this.addjobForm = new FormGroup({
      advertise: new FormControl(job ? job.advertise : '', [
        Validators.required,
      ]),
      postname: new FormControl(job ? job.postname : '', [Validators.required]),
      discription: new FormControl(job ? job.discription : '', [
        Validators.required,
      ]),
      department: new FormControl(job ? job.department : '', [
        Validators.required,
      ]),
      advertisementdate: new FormControl(job ? job.advertisementdate : '', [
        Validators.required,
      ]),
      startdate: new FormControl(job ? job.startdate : '', [
        Validators.required,
      ]),
      lastdate: new FormControl(job ? job.lastdate : '', [Validators.required]),
      feessubmissionlastdate: new FormControl(
        job ? job.feessubmissionlastdate : '',
        [Validators.required]
      ),
      totalposts: new FormControl(job ? job.totalposts : '', [
        Validators.required,
      ]),
      informationabout: new FormControl(job ? job.informationabout : '', [
        Validators.required,
      ]),
      categories: new FormArray(this.getCategoriesArray(job), [
        Validators.required,
      ]),
    });
  }

  getCategoriesArray(job: any) {
    const cgs: any[] = [];
    if (job?.categories) {
      job.categories.forEach(
        (element: { category: any; fees: any; posts: any }) => {
          cgs.push(
            this.fb.group({
              category: new FormControl(element ? element.category : '', [
                Validators.required,
              ]),
              fees: new FormControl(element ? element.fees : '', [
                Validators.required,
              ]),
              posts: new FormControl(element ? element.posts : '', [
                Validators.required,
              ]),
            })
          );
        }
      );
    }
    return cgs;
  }

  getControl = (name: any) =>  {
    return this.addjobForm!.get(name);
  }
  getControls() {
    return (this.addjobForm!.get('categories') as FormArray).controls;
  }
  getCategoryControlByIndex(i: number, name: string)  {
    return (
      (this.addjobForm!.get('categories') as FormArray).controls[i] as FormGroup
    ).controls[name];
  }
  addCategoryType() {
    let categories = this.addjobForm!.get('categories') as FormArray;
    categories.push(this.getCategoryTemplate());
  }
  getCategoryTemplate() {
    return this.fb.group({
      category: new FormControl('', [Validators.required]),
      fees: new FormControl('', [Validators.required]),
      posts: new FormControl('', [Validators.required]),
    });
  }
  Addjob() {
    if (this.id) {
      if (!this.addjobForm?.invalid) {
        this.jobService.saveJob(this.addjobForm!.value, this.id);
      }
    } else {
      if (!this.addjobForm?.invalid) {
        this.jobService.addJob(this.addjobForm!.value);
      }
      console.log(this.addjobForm!.value);
      this.addjobForm?.reset();
    }
  }
}
