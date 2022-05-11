import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_URL || window.REACT_APP_API_URL;

export const taskApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders(headers) {
            headers.set("content-type", "application/json");
            return headers;
        },
    }),
    tagTypes: ['Task'],
    endpoints(builder) {
        return {
            fetchTasks: builder.query({
                query: () => "/tasks",
                providesTags: ['Task']
            }),
            createTask: builder.mutation({
                query: (payload) => ({
                    url: "/tasks",
                    method: "POST",
                    body: payload,
                }),
                invalidatesTags: ['Task']
            }),
            updateTask: builder.mutation({
                query: ({ _id: id, ...payload }) => ({
                    url: `/tasks/${id}`,
                    method: "PUT",
                    body: payload,
                }),
                invalidatesTags: ['Task']
            }),
            deleteTask: builder.mutation({
                query: (id) => ({
                    url: `/tasks/${id}`,
                    method: "DELETE"
                }),
                invalidatesTags: ['Task']
            }),
        };
    },
});

export const {
    useFetchTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = taskApiSlice;
