'use client';

import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiEdit2, FiTrash, FiSave, FiX } from 'react-icons/fi';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

type Project = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
};

type Experience = {
  _id?: string;
  company: string;
  logo: string;
  role: string;
  date: string;
  bullets: string[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const emptyProject: Project = {
  title: '', description: '', image: '', techStack: [], link: ''
};

const emptyExperience: Experience = {
  company: '', logo: '', role: '', date: '', bullets: []
};

async function uploadToCloudinary(file: File): Promise<string | undefined> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (res.ok) return data.url;
  else alert(data.error);
}

export default function DashboardManager() {
  // Data state
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  // New/edit form state
  const [newProject, setNewProject] = useState<Project>(emptyProject);
  const [editingProject, setEditingProject] = useState<any>(null);

  const [newExperience, setNewExperience] = useState<Experience>(emptyExperience);
  const [editingExperience, setEditingExperience] = useState<any>(null);

  // UI/UX state
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Fetch all on mount
  useEffect(() => {
    fetchProjects();
    fetchExperiences();
  }, []);

  async function fetchProjects() {
    const res = await fetch('/api/dashboard/project');
    const { projects } = await res.json();
    setProjects(projects);
  }

  async function fetchExperiences() {
    const res = await fetch('/api/dashboard/experience');
    const { experiences } = await res.json();
    setExperiences(experiences);
  }

  // --- Cloudinary Handlers ---
  async function handleProjectImageUpload(file: File) {
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      if (url) setNewProject((p) => ({ ...p, image: url }));
    } finally {
      setUploading(false);
    }
  }
  async function handleProjectEditImageUpload(file: File) {
    if (!editingProject) return;
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      if (url) setEditingProject({ ...editingProject, image: url });
    } finally {
      setUploading(false);
    }
  }
  async function handleExperienceLogoUpload(file: File) {
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      if (url) setNewExperience((e) => ({ ...e, logo: url }));
    } finally {
      setUploading(false);
    }
  }
  async function handleExperienceEditLogoUpload(file: File) {
    if (!editingExperience) return;
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      if (url) setEditingExperience({ ...editingExperience, logo: url });
    } finally {
      setUploading(false);
    }
  }

  // --- Projects CRUD ---
  async function handleAddProject() {
    if (!newProject.title) return;
    setLoading(true);
    try {
      const res = await fetch('/api/dashboard/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        fetchProjects();
        setNewProject(emptyProject);
      }
    } finally {
      setLoading(false);
    }
  }
  async function handleSaveProject() {
    if (!editingProject?._id) return;
    setLoading(true);
    try {
      await fetch(`/api/dashboard/project?id=${editingProject._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProject),
      });
      fetchProjects();
      setEditingProject(null);
    } finally {
      setLoading(false);
    }
  }
  async function handleDeleteProject(id: string) {
    if (!window.confirm('Delete this project?')) return;
    setLoading(true);
    try {
      await fetch(`/api/dashboard/project?id=${id}`, { method: 'DELETE' });
      fetchProjects();
    } finally {
      setLoading(false);
    }
  }

  // --- Experience CRUD ---
  async function handleAddExperience() {
    if (!newExperience.company) return;
    setLoading(true);
    try {
      const res = await fetch('/api/dashboard/experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExperience),
      });
      if (res.ok) {
        fetchExperiences();
        setNewExperience(emptyExperience);
      }
    } finally {
      setLoading(false);
    }
  }
  async function handleSaveExperience() {
    if (!editingExperience?._id) return;
    setLoading(true);
    try {
      await fetch(`/api/dashboard/experience?id=${editingExperience._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingExperience),
      });
      fetchExperiences();
      setEditingExperience(null);
    } finally {
      setLoading(false);
    }
  }
  async function handleDeleteExperience(id: string) {
    if (!window.confirm('Delete this experience?')) return;
    setLoading(true);
    try {
      await fetch(`/api/dashboard/experience?id=${id}`, { method: 'DELETE' });
      fetchExperiences();
    } finally {
      setLoading(false);
    }
  }

  // --- UI Render ---
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-10 lg:px-24 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Manage Jobs & Experience</h1>
      <Tab.Group>
        <Tab.List className="flex space-x-4 rounded-xl bg-white p-1 shadow-md w-max mb-6">
          {['Personal Projects', 'Work Experience'].map(tab => (
            <Tab key={tab}
              className={({ selected }) =>
                classNames(
                  'px-6 py-2.5 text-sm font-medium rounded-lg',
                  selected ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-200'
                )}
            >{tab}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {/* --- Projects Panel --- */}
          <Tab.Panel>
            <div className="mb-8 grid sm:grid-cols-2 gap-4">
              {/* Project Title */}
              <input
                value={newProject.title}
                onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                placeholder="Title"
                className="border p-2 rounded"
              />
              {/* Project Image */}
              <label className="flex flex-col gap-2">
                <span>Project Image</span>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newProject.image}
                  onChange={e => setNewProject({ ...newProject, image: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    if (e.target.files?.[0]) handleProjectImageUpload(e.target.files[0]);
                  }}
                  className="border p-2 rounded"
                  disabled={uploading}
                />
                {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
              </label>
              {/* Tech stack */}
              <input
                value={newProject.techStack.join(', ')}
                onChange={e => setNewProject({ ...newProject, techStack: e.target.value.split(',').map(s => s.trim()) })}
                placeholder="Tech (comma separated)"
                className="border p-2 rounded"
              />
              {/* External link */}
              <input
                value={newProject.link}
                onChange={e => setNewProject({ ...newProject, link: e.target.value })}
                placeholder="External link"
                className="border p-2 rounded"
              />
              {/* Description */}
              <textarea
                value={newProject.description}
                onChange={e => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Description"
                className="border p-2 rounded col-span-full"
              />
              <button
                onClick={handleAddProject}
                disabled={loading || uploading}
                className="bg-gray-900 text-white px-4 py-2 rounded w-fit"
              >
                {(loading || uploading) ? 'Processing...' : 'Add Project'}
              </button>
            </div>
            <div className="space-y-8">
              {projects.map(p => (
                <div key={p._id} className="flex flex-col md:grid md:grid-cols-2 bg-white rounded-lg shadow overflow-hidden">
                  <div className="bg-gray-50 p-4 relative h-64 md:h-96">
                    {p.image &&
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    }
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    {/* Edit mode */}
                    {editingProject?._id === p._id ? (
                      <>
                        <input value={editingProject.title} onChange={e => setEditingProject({ ...editingProject, title: e.target.value })} className="border p-2 rounded" />
                        <label className="flex flex-col gap-2">
                          <input
                            type="text"
                            placeholder="Image URL"
                            value={editingProject.image}
                            onChange={e => setEditingProject({ ...editingProject, image: e.target.value })}
                            className="border p-2 rounded"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={e => {
                              if (e.target.files?.[0]) handleProjectEditImageUpload(e.target.files[0]);
                            }}
                            className="border p-2 rounded"
                            disabled={uploading}
                          />
                          {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
                        </label>
                        <input value={editingProject.techStack.join(', ')} onChange={e => setEditingProject({ ...editingProject, techStack: e.target.value.split(',').map(s => s.trim()) })} className="border p-2 rounded" />
                        <input value={editingProject.link} onChange={e => setEditingProject({ ...editingProject, link: e.target.value })} className="border p-2 rounded" />
                        <textarea value={editingProject.description} onChange={e => setEditingProject({ ...editingProject, description: e.target.value })} className="border p-2 rounded" />
                        <div className="flex gap-3">
                          <button onClick={handleSaveProject} className="bg-green-700 text-white rounded px-3 py-1 flex items-center gap-2">
                            <FiSave /> Save
                          </button>
                          <button onClick={() => setEditingProject(null)} className="bg-gray-400 text-white rounded px-3 py-1 flex items-center gap-2">
                            <FiX /> Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-semibold">{p.title}</h3>
                          <div className="flex gap-3 text-gray-500">
                            <FiEdit2 className="cursor-pointer" onClick={() => setEditingProject(p)} />
                            <FiTrash className="cursor-pointer" onClick={() => handleDeleteProject(p._id!)} />
                          </div>
                        </div>
                        <p className="text-gray-500">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.techStack.map((t, i) => (
                            <span key={i} className="bg-gray-200 rounded px-2 py-1 text-xs">{t}</span>
                          ))}
                        </div>
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                            <FiExternalLink size={18} /> External Link
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>

          {/* --- Experience Panel --- */}
          <Tab.Panel>
            <div className="mb-8 grid sm:grid-cols-2 gap-4">
              <input value={newExperience.company} onChange={e => setNewExperience({ ...newExperience, company: e.target.value })} placeholder="Company" className="border p-2 rounded" />
              <label className="flex flex-col gap-2">
                <span>Logo</span>
                <input
                  type="text"
                  placeholder="Logo URL"
                  value={newExperience.logo}
                  onChange={e => setNewExperience({ ...newExperience, logo: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    if (e.target.files?.[0]) handleExperienceLogoUpload(e.target.files[0]);
                  }}
                  className="border p-2 rounded"
                  disabled={uploading}
                />
                {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
              </label>
              <input value={newExperience.role} onChange={e => setNewExperience({ ...newExperience, role: e.target.value })} placeholder="Role" className="border p-2 rounded" />
              <input value={newExperience.date} onChange={e => setNewExperience({ ...newExperience, date: e.target.value })} placeholder="Date" className="border p-2 rounded" />
              <textarea value={newExperience.bullets.join('\n')} onChange={e => setNewExperience({ ...newExperience, bullets: e.target.value.split('\n') })} placeholder="Bullets (one per line)" className="border p-2 rounded col-span-full" />
              <button onClick={handleAddExperience} disabled={loading || uploading} className="bg-gray-900 text-white px-4 py-2 rounded w-fit">
                {(loading || uploading) ? 'Processing...' : 'Add Experience'}
              </button>
            </div>
            <div className="space-y-6">
              {experiences.map(e => (
                <div key={e._id} className="flex flex-col sm:flex-row bg-white rounded-xl shadow p-6 gap-4">
                  {e.logo && (
                    <div className="w-16 h-16 flex-shrink-0 relative">
                      <Image src={e.logo} fill alt={`${e.company} logo`} className="object-contain rounded" />
                    </div>
                  )}
                  <div className="flex-1">
                    {/* Edit mode */}
                    {editingExperience?._id === e._id ? (
                      <>
                        <input value={editingExperience?.company} onChange={ev => setEditingExperience({ ...editingExperience, company: ev.target.value })} className="border p-2 rounded" />
                        <label className="flex flex-col gap-2">
                          <input
                            type="text"
                            placeholder="Logo URL"
                            value={editingExperience?.logo}
                            onChange={ev => setEditingExperience({ ...editingExperience, logo: ev.target.value })}
                            className="border p-2 rounded"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={ev => {
                              if (ev.target.files?.[0]) handleExperienceEditLogoUpload(ev.target.files[0]);
                            }}
                            className="border p-2 rounded"
                            disabled={uploading}
                          />
                          {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
                        </label>
                        <input value={editingExperience?.role} onChange={ev => setEditingExperience({ ...editingExperience, role: ev.target.value })} className="border p-2 rounded" />
                        <input value={editingExperience?.date} onChange={ev => setEditingExperience({ ...editingExperience, date: ev.target.value })} className="border p-2 rounded" />
                        <textarea value={editingExperience?.bullets.join('\n')} onChange={ev => setEditingExperience({ ...editingExperience, bullets: ev.target.value.split('\n') })} className="border p-2 rounded" />
                        <div className="flex gap-3">
                          <button onClick={handleSaveExperience} className="bg-green-700 text-white rounded px-3 py-1 flex items-center gap-2">
                            <FiSave /> Save
                          </button>
                          <button onClick={() => setEditingExperience(null)} className="bg-gray-400 text-white rounded px-3 py-1 flex items-center gap-2">
                            <FiX /> Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">{e.role}</h3>
                          <span className="text-gray-500">{e.date}</span>
                        </div>
                        <p className="text-sm font-medium mt-1">{e.company}</p>
                        <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                          {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        <div className="flex gap-3 mt-4 text-gray-500">
                          <FiEdit2 className="cursor-pointer" onClick={() => setEditingExperience(e)} />
                          <FiTrash className="cursor-pointer" onClick={() => handleDeleteExperience(e._id!)} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
