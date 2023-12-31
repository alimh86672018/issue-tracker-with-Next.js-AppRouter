"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Flex,
} from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = ({ IssueId }: { IssueId: number }) => {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <Button color="red">
          <TrashIcon />
          Delete Issue
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: 450 }}>
        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete this issue? This action can not be
          undone
        </AlertDialogDescription>
        <Flex gap="3" mt="4">
          <AlertDialogCancel>
            <Button color="gray" variant="soft">
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button color="red">Delete</Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};

export default DeleteIssueButton;
