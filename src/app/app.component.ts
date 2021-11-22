import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-local';
  comments: any = [];
  showReplyInput: boolean = false;
  replyCommentId: number = 0;
  commentText: string = '';
  constructor() {}
  ngOnInit() {}
  onCommentClick(commentTxt: any) {
    let newComment = new Comment('username', commentTxt);

    this.comments.push(newComment);
    console.log(this.comments);
    // this.comments.push(newComment);
    this.commentText = '';
    console.log(document.getElementById('#comment_input'));
  }
  replyBtnClicked(comment: any) {
    this.showReplyInput = true;
    this.replyCommentId = comment.id;
    console.log(comment);
  }
  replyCommentClicked(parentComment: any, replyComment: any) {
    console.log(replyComment);
    let indexArr: number = 0;
    this.comments.forEach((el: any, index: number) => {
      if (el.id == parentComment.id) {
        indexArr = index;
      }
    });
    let newReply = new Comment('author', replyComment);
    this.comments[indexArr].replies.push(newReply);
    this.showReplyInput = false;
    console.log(this.comments);
  }
}
class Comment {
  author = 'DEFAULT';
  commentTxt = 'PLAIN COMMENT TEXT';
  id = 0;
  replies = [];
  constructor(author: string, commentTxt: string) {
    this.author = author;
    this.commentTxt = commentTxt;
    this.id = Math.floor(Math.random() * 1000);
    this.replies = [];
  }
}
