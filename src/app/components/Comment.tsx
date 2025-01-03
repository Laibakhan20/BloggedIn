"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Comment, CommentSectionProps } from "../interface";

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };
  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };
  const handleSaveComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="comment-section mt-16 bg-myblack ">
      <h2 className="text-3xl font-rale font-bold">Comments</h2>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id} className="border border-myblack mt-4">
              <CardContent className="p-4 ">
                <div className="font-mono">{comment.author}</div>
                <p className="font-mono">{comment.text}</p>
                <Button onClick={() => handleEditComment(comment.id)} className="bg-myblack text-white hover:bg-mypurple mt-2 font-mono">
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="font-mono text-base text-lightgray mt-3">No Comment Yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="your name"
          className="w-full mb-2 focus:border-mypurple"
        ></Input>

        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2 focus:border-mypurple"
        ></Input>

        <Button onClick={editingCommentId ? handleSaveComment : handleAddComment} 
        className="mt-4 bg-white text-myblack hover:bg-mypurple hover:text-white">
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
